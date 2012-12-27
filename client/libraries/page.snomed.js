Template.snomedPageTemplate.rendered = function (){

    setSidebarPanelHeight();
    var anatomyList = new List('snomed-anatomy-list', {
        // specify the element classes we want to sort our list by
        valueNames: [ 'anatomy-name' ]
    });
    $(window).resize(function(){
        setSidebarPanelHeight();
    });
};
function setSidebarPanelHeight() {
    $('#anatomySearchPanel').css('height', window.innerHeight - 120);
    $('#anatomyAdminPanel').css('height', window.innerHeight - 120);
}

Template.snomedPageTemplate.snomed_reference = function () {
    log_event('Template.communityPageTemplate.snomed_reference', LogLevel.Trace);
    return Anatomy.find();
};
Template.snomedPageTemplate.snomed_count = function () {
    log_event('Template.communityPageTemplate.snomed_count', LogLevel.Trace);
    return Anatomy.find().count();
};

Template.snomedPageTemplate.events({
    'click .anatomy-item': function (evt, tmpl) {
        $('#contentDrop').html(this.name);
        $('#contentDrop').append(this.image);
        //alert(JSON.stringify(this));
        //Meteor.users.update(Meteor.userId(), {$pull: { 'profile.collaborators': this }});
    }
});

Template.anatomyItemTemplate.anatomy_image = function () {
    log_event('Template.anatomyItemTemplate.anatomy_image', LogLevel.Trace);
    return this.image;
    //return 'bar';
};