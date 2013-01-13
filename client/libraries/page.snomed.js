Template.snomedPageTemplate.rendered = function (){

    setSidebarPanelHeight();
//    var anatomyList = new List('snomed-anatomy-list', {
//        // specify the element classes we want to sort our list by
//        valueNames: [ 'anatomy-name' ]
//    });
    $(window).resize(function(){
        setSidebarPanelHeight();
    });
};
function setSidebarPanelHeight() {
    $('#anatomySearchPanel').css('height', window.innerHeight - 120);
    $('#anatomyAdminPanel').css('height', window.innerHeight - 120);
};

Template.snomedPageTemplate.snomed_reference = function () {
    log_event('Template.snomedPageTemplate.snomed_reference', LogLevel.Trace);
    return Anatomy.find();
};
Template.snomedPageTemplate.snomed_count = function () {
    log_event('Template.snomedPageTemplate.snomed_count: ' + Anatomy.find().count(), LogLevel.Trace);
    return Anatomy.find().count();
};

Template.snomedPageTemplate.events({
    'click .anatomy-item': function (evt, tmpl) {

        //TODO:  Click on an image in Anatomy page, and the anchor image updates
        //
        // 1.  upload high res images of grays anatomy screensaver
        // figure out image size loading constraints
        //
        // 2.  add anchor images to Anatomy collection
        //
        // $('#anchorImage').attr("src", Anatomy.findOne(this._id).image);
        //

        if(Session.get('selecting_anatomy')){
            Todos.update(Session.get('selecting_anatomy'), {$set: { 'anatomy' :  this._id }});
            showPage('#historyPage');
        }else{
            $('#contentDrop').html(this.name);
            $('#contentDrop').append(this.image);
        }
        //alert(JSON.stringify(this));
        //Meteor.users.update(Meteor.userId(), {$pull: { 'profile.collaborators': this }});
    }
});

Template.anatomyItemTemplate.anatomy_image = function () {
    //log_event('Template.anatomyItemTemplate.anatomy_image', LogLevel.Trace);
    return this.image;
    //return 'bar';
};