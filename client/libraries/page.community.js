Template.communityPageTemplate.rendered = function (){
    var communityList = new List('community-members-list', {
        // specify the element classes we want to sort our list by
        valueNames: [ 'user-email', 'user-posts', 'user-rank' ]
    });
};
Template.communityPageTemplate.events({
    'click .destroy': function (evt, tmpl) {
        Meteor.users.update(Meteor.userId(), {$pull: { 'profile.collaborators': this }});
    }
});
Template.communityPageTemplate.communityUsers = function () {
    //log_event('Template.communityPageTemplate.communityUsers: ' + Meteor.users.find().count(), LogLevel.Trace);
    return Meteor.users.find();
};

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




//--------------------------------------------------------------------
// collaboratorItem

Template.collaboratorItem.collaborator_email = function () {
    log_event('Template.collaboratorItemTemplate.collaborator_email', LogLevel.Trace);
    return this.address;
};



//--------------------------------------------------------------------
// userItemTemplate

Template.userQuickView.quickView = function(){
    var user = Meteor.users.find({_id: this._id});
    return user;
};

//--------------------------------------------------------------------
// userItemTemplate

Template.userItemTemplate.events({
    'dblclick .user-card': function () {

        Meteor.users.update(Meteor.userId(), {$addToSet: { 'profile.collaborators': { address: this.emails[0].address } }}, function(){
            Meteor.flush();
            hidePages();
            showPage('#communityPage');
        });
    },
    'click .user-card': function () {
        Session.set('selected_community_member', this._id);
    }
});
Template.userItemTemplate.userEmail = function () {
    log_event('Template.userItemTemplate.userEmail', LogLevel.Trace);
    return this.emails[0].address;
};
Template.userItemTemplate.userHealthEntries = function () {
    log_event('Template.userItemTemplate.userHealthEntries', LogLevel.Trace);
    return toInteger(Math.random() * 25000);
};
Template.userItemTemplate.userNetworkSize = function () {
    log_event('Template.userItemTemplate.userNetworkSize', LogLevel.Trace);
    return toInteger(Math.random() * 240);
};
Template.userItemTemplate.userHealthRank = function () {
    log_event('Template.userItemTemplate.userHealthRank', LogLevel.Trace);
    return toInteger(Math.random() * 100);
};
Template.userItemTemplate.userImage = function () {
    log_event('Template.userItemTemplate.user_image', LogLevel.Trace);
    var src = "images/placeholder-240x240.gif";
    if(this.profile){
        src = $.trim(this.profile.avatar);
    }
    log_event('profile avatar src: ' + src, LogLevel.Info);
    return src;
};


//Template.players.isMemberOf = function (userRole) {
//    return this.userRole === userRole;
//};
function toInteger(number){
    return Math.round(
        Number(number)
    );
};





//Template.communityPageTemplate.events(okCancelEvents(
//    '#new-user',
//    {
//        ok: function (text, evt) {
//            console.log('ok called on new todo item');
//            var tag = Session.get('tag_filter');
//            console.log('tags: ' + tag);
//
////            users.insert({
////                text: text,
////                list_id: Session.get('list_id'),
////                done: false,
////                timestamp: (new Date()).getTime(),
////                tags: tag ? [tag] : []
////            });
//            console.log('text.length: ' + text.length);
//            if (text.length) {
//                console.log('text: ' + text);
//                console.log('list_id: ' + Session.get('list_id'));
//                console.log('owner: ' + Meteor.userId());
//
////                Meteor.call('createQuestion', {
////                    text: text,
////                    list_id: Session.get('list_id'),
////                    done: false,
////                    timestamp: (new Date()).getTime(),
////                    tags: tag ? [tag] : [],
////                    owner: Meteor.userId,
////                    tags: tag ? [tag] : [],
////                    public: 'public'
////                }, function (error, todo) {
////                    console.log('error: ' + error);
////                    console.log('todo: ' + todo);
////                });
//            } else {
//                Session.set("createError",
//                    "It needs a title and a description, or why bother?");
//            }
//
//            evt.target.value = '';
//        }
//    })
//);
