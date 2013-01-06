// Client-side JavaScript, bundled and sent to client.


// Define Minimongo collections to match server/publish.js.
//Anatomy = new Meteor.Collection("anatomy");

// ID of currently selected list
Session.set('list_id', null);

// Name of currently selected tag for filtering
Session.set('tag_filter', null);

// When adding tag to a todo, ID of the todo
Session.set('editing_addtag', null);

// When editing a list name, ID of the list
Session.set('editing_listname', null);

// When editing todo text, ID of the todo
Session.set('editing_itemname', null);

// ID of currently selected page
Session.set('current_page', null);

Session.set('selected_community_member', false);
Session.set('display_approve_carewatch_panel', false);

Session.set('selecting_anatomy', null);
Session.set('display_profile_json_panel', false);
Session.set('display_snomed_preview_panel', false);
Session.set('display_snomed_admin_panel', false);

Template.app_container.loggedIn = function () {
    if(Meteor.userId()){
        log_event('Meteor.userId(): ' + Meteor.userId(), LogLevel.Info);
        return true;
    }else{
        log_event('Meteor.userId() is null.', LogLevel.Info);
        return false;
    }
};
Template.app_container.rendered = function () {
// set default page views
    hidePages();
    showCurrentSessionPage();
};



Meteor.startup(function () {
    Backbone.history.start({pushState: true});

    //Seting up Filepicker.io with your api key
    filepicker.setKey('ALZywWZ1wQIuLEBAun2fAz');


    var w = 200,
        h = 200,
        i = 0,
        barHeight = 20,
        barWidth = w * .8,
        duration = 400,
        root;

//    var tree = d3.layout.tree()
//        .size([h, 100]);
//
//    var diagonal = d3.svg.diagonal()
//        .projection(function(d) { return [d.y, d.x]; });

    d3.select("#chart").append('bar');

    var vis = d3.select("#chart").append("svg:svg")
        .attr("width", w)
        .attr("height", h)
        .attr("borderColor","orange");

//    var vis = d3.select("#chart").append("svg:svg")
//        .attr("width", w)
//        .attr("height", h)
//        .attr("border", '3px solid blue')
//        .append("svg:g")
//        .attr("transform", "translate(20,30)");

    parseIcd10File();
    // set default page views
    hidePages();
    showHomePage();
});




function parseIcd10File() {
    $('#xmlData').html('');
    $.ajax({
        type:"get",
        url:'/datafile/ICD10_Disease_Sample.xml',
        dataType:"xml",
        complete:function (data) {

            //$('#xmlData').append("<b>icd10 codes</b><br>");
            function findTerm(arg) {
                $(this).children('term').each(function () {
                    var title = $(this).find('title').first().text();
                    var code = $(this).find('code').first().text();
                    $('#xmlData').append(arg + " " + title + " " + code + "<br>");
                    findTerm.call(this, arg + "-");
                });
            }
            $(data.responseXML).find('mainTerm').each(function () {
                var title = $(this).find('title').first().text();
                var code = $(this).find('code').first().text();
                var seeAlso = $(this).find('seeAlso').first().text();
                $('#xmlData').append("<b>" + title + "</b> " + code + "<br>");
                findTerm.call(this, "-");
            });
        }
    });
    if (Icd10.find().count() === 0) {
        $.ajax({
            type:"get",
            url:'/datafile/ICD10_Disease_Sample.xml',
            dataType:"xml",
            complete:function (data) {
                function updateTerm(level, path, objectId, termCode) {
                    var updatePath = path;
                    if (termCode) {
                        updatePath = updatePath + "." + termCode;
                    }
                    var id = Icd10.update(objectId, {$set:{ updatePath:{
                        level:level,
                        title:$(this).find('title').first().text(),
                        code:$(this).find('code').first().text()
                    }}});
                    $(this).children('term').each(function () {
                        var code = $(this).find('code').first().text();
                        updateTerm.call(this, level + 1, path + '.children', id, code);
                    });
                }
                $(data.responseXML).find('mainTerm').each(function () {
                    var id = Icd10.insert({
                        title:$(this).find('title').first().text(),
                        code:$(this).find('code').first().text(),
                        seeAlso:$(this).find('seeAlso').first().text()
                    });
                    $(this).children('term').each(function () {
                        //var code =  $(this).find('code').first().text();
                        updateTerm.call(this, 1, 'term', id, '');
                    });
                });
            }
        });
    }
}


