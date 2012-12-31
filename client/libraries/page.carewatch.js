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


Template.carewatch_entry.tag_objs = function () {
    var todo_id = this._id;
    return _.map(this.tags || [], function (tag) {
        return {todo_id: todo_id, tag: tag};
    });
};

Template.carewatch_entry.done_class = function () {
    return this.done ? 'done' : '';
};

Template.carewatch_entry.done_checkbox = function () {
    return this.done ? 'checked="checked"' : '';
};

Template.carewatch_entry.editing = function () {
    return Session.equals('editing_itemname', this._id);
};

Template.carewatch_entry.adding_tag = function () {
    return Session.equals('editing_addtag', this._id);
};
Template.carewatch_entry.owner_name = function () {
    if(this.owner){
        return Meteor.users.findOne(this.owner).profile.name;
    }else{
        return "Unknown";
    }
};
Template.carewatch_entry.owner_avatar = function () {
    if(this.owner){
        return Meteor.users.findOne(this.owner).profile.avatar;
    }else{
        return "images/placeholder-240x240.gif";
    }
}
Template.carewatch_entry.events({
    'click .todo': function () {
        alert(JSON.stringify(this));
    }
});

Template.carewatch_entry.events(okCancelEvents(
    '#todo-input',
    {
        ok: function (value) {
            Todos.update(this._id, {$set: {text: value}});
            Session.set('editing_itemname', null);
        },
        cancel: function () {
            Session.set('editing_itemname', null);
        }
    }));

Template.carewatch_entry.events(okCancelEvents(
    '#edittag-input',
    {
        ok: function (value) {
            Todos.update(this._id, {$addToSet: {tags: value}});
            Session.set('editing_addtag', null);
        },
        cancel: function () {
            Session.set('editing_addtag', null);
        }
    }));
