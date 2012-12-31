Template.newsPageTemplate.showNewCarewatchMember = function () {
    return Session.get('display_approve_carewatch_panel');
};

Template.carewatchNewsTemplate.carewatch_entries = function () {
  return Todos.find();
};

Template.carewatchCommunityTemplate.carewatchCount = function () {
    log_event('Template.carewatchCommunityTemplate.carewatchMembers', LogLevel.Trace);
    // Meteor.user().profile breaks when user is logged out
    if(Meteor.user()){
        if(Meteor.user().profile){
            log_event('Meteor.user().profile exists.  Returning carewatch collection.', LogLevel.Trace);
            return Meteor.user().profile.carewatch.count;
        }else{
            log_event('No Meteor.user().profile.  New user?', LogLevel.Trace);
        }
    }else{
        log_event('No Meteor.user().  User not logged in?', LogLevel.Trace);
        return 'Carewatch unavailable.';
    }
};
Template.carewatchCommunityTemplate.carewatchMembers = function () {
    log_event('Template.carewatchCommunityTemplate.carewatchMembers', LogLevel.Trace);
    // Meteor.user().profile breaks when user is logged out
    if(Meteor.user()){
        if(Meteor.user().profile){
            log_event('Meteor.user().profile exists.  Returning carewatch collection.', LogLevel.Trace);
            return Meteor.user().profile.carewatch;
        }else{
            log_event('No Meteor.user().profile.  New user?', LogLevel.Trace);
        }
    }else{
        log_event('No Meteor.user().  User not logged in?', LogLevel.Trace);
        return 'Carewatch unavailable.';
    }
};

Template.carewatchMemberTemplate.carewatch_member_email = function () {
    log_event('Template.collaboratorItemTemplate.collaborator_email', LogLevel.Trace);
    if(this.address){
        return this.address;
    }else{
        return 'No email address available.'
    }
};
Template.carewatchMemberTemplate.carewatch_member_name = function () {
    log_event('Template.collaboratorItemTemplate.collaborator_email', LogLevel.Trace);
    if(this.address){
        return this.name;
    }else{
        return 'User has no name.  :('
    }
};
Template.carewatchCommunityTemplate.events({
    'click .close': function (evt, tmpl) {
        Session.set('display_approve_carewatch_panel', false);
        Meteor.flush();
    }
});