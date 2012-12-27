Template.communityPageTemplate.rendered = function (){
    var communityList = new List('community-members-list', {
        // specify the element classes we want to sort our list by
        valueNames: [ 'user-email', 'user-posts', 'user-rank' ]
    });
};
Template.communityPageTemplate.events({
    'click .destroy': function (evt, tmpl) {
        //alert(JSON.stringify(this));
        Meteor.users.update(Meteor.userId(), {$pull: { 'profile.collaborators': this }}, function(){
            //Meteor.flush();
            //showPage('#communityPage');
        });
    }
});
Template.communityPageTemplate.events(okCancelEvents(
    '#new-user',
    {
        ok: function (text, evt) {
            console.log('ok called on new todo item');
            var tag = Session.get('tag_filter');
            console.log('tags: ' + tag);

//            users.insert({
//                text: text,
//                list_id: Session.get('list_id'),
//                done: false,
//                timestamp: (new Date()).getTime(),
//                tags: tag ? [tag] : []
//            });
            console.log('text.length: ' + text.length);
            if (text.length) {
                console.log('text: ' + text);
                console.log('list_id: ' + Session.get('list_id'));
                console.log('owner: ' + Meteor.userId());

//                Meteor.call('createQuestion', {
//                    text: text,
//                    list_id: Session.get('list_id'),
//                    done: false,
//                    timestamp: (new Date()).getTime(),
//                    tags: tag ? [tag] : [],
//                    owner: Meteor.userId,
//                    tags: tag ? [tag] : [],
//                    public: 'public'
//                }, function (error, todo) {
//                    console.log('error: ' + error);
//                    console.log('todo: ' + todo);
//                });
            } else {
                Session.set("createError",
                    "It needs a title and a description, or why bother?");
            }

            evt.target.value = '';
        }
    })
);


Template.communityPageTemplate.user_count = function () {
    log_event('Template.userslist.user_count', LogLevel.Trace);
    var usersList = Meteor.users.find();
    return usersList.count();
};
Template.communityPageTemplate.collaborators = function () {
    log_event('Template.userslist.collaborators', LogLevel.Trace);
    // Meteor.user().profile breaks when user is logged out
    if(Meteor.user()){
        if(Meteor.user().profile){
            return Meteor.user().profile.collaborators;
        }
    }else{
        return 'Collaborators unavailable.';
    }
};
Template.communityPageTemplate.collaborators_count = function () {
    // Meteor.user().profile breaks when user is logged out
    if(Meteor.user()){
        if(Meteor.user().profile){
            return Meteor.user().profile.collaborators.length;
        }
    }else{
        return 'Unavailable.';
    }
};


Template.communityPageTemplate.users = function () {
    // Determine which todos to display in main pane,
    // selected based on list_id and tag_filter.

//    var list_id = Session.get('list_id');
//    if (!list_id)
//        return {};
//
//    var sel = {list_id: list_id};
//    var tag_filter = Session.get('tag_filter');
//    if (tag_filter)
//        sel.tags = tag_filter;
    log_event('Template.userslist.users', LogLevel.Trace);
    return Meteor.users.find();
};

Template.collaboratorItem.collaborator_email = function () {
    log_event('Template.collaboratorItemTemplate.userEmail', LogLevel.Trace);
    return this.address;
};