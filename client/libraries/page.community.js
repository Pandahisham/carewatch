Template.communityPageTemplate.rendered = function (){};

Template.communityPageTemplate.events({
    'click .destroy': function (evt, tmpl) {
        Meteor.users.update(Meteor.userId(), {$pull: { 'profile.collaborators': this }});
    },
    'change input': function (evt, tmpl) {
        Session.set('community_members_filter', $('#filterInput').val());
        Meteor.flush();
    },
    'keypress input': function (evt, tmpl) {
       Session.set('community_members_filter', $('#filterInput').val());
       Meteor.flush();
    }
});
Template.communityPageTemplate.communityUsers = function () {
        return Meteor.users.find({'emails.address': { $regex: Session.get('community_members_filter'), $options: 'i' } });
};
Template.communityPageTemplate.showQuickViewPanel = function () {
    log_event('Template.communityPageTemplate.showQuickViewPanel', LogLevel.Trace);
    return Session.get('show_quick_view_panel');
};

Template.communityPageTemplate.user_count = function () {
    log_event('Template.userslist.user_count', LogLevel.Trace);
    return Meteor.users.find().count();
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
            if(Meteor.user().profile.collaborators > 0){
                return Meteor.user().profile.collaborators.length;
            }else{
                return '0';
            }
        }else{
            return '0';
        }
    }else{
        return 'No profile yet.';
    }
};




//--------------------------------------------------------------------
// collaboratorItem

Template.collaboratorItem.collaborator_email = function () {
    log_event('Template.collaboratorItemTemplate.collaborator_email', LogLevel.Trace);
    return this.address;
};


Template.quickViewPanelTemplate.userId = function () {
    var user = Meteor.users.findOne({ _id: Session.get('selected_community_member') });
    if(user){
        return user._id;
    }else{
        return false;
    }
}
Template.quickViewPanelTemplate.userName = function () {
    var user = Meteor.users.findOne({ _id: Session.get('selected_community_member') });
    return user.profile.name;
}
Template.quickViewPanelTemplate.userEmailAddress = function () {
    var user = Meteor.users.findOne({ _id: Session.get('selected_community_member') });
    if(user.emails){
        return user.emails.address;
    }
}

//--------------------------------------------------------------------
// userItemTemplate

//Template.userQuickView.quickView = function(){
//    return Meteor.users.find({_id: Session.get('selected_community_member')}).username;
//};

//--------------------------------------------------------------------
// userItemTemplate

Template.userItemTemplate.events({
    'dblclick .user-card': function () {
        Meteor.users.update(this._id, {$addToSet: { 'profile.carewatch' : {
            _id: Meteor.userId(),
            name: Meteor.user().profile.name,
            address: Meteor.user().emails.address
        }}}, function(){});
        Meteor.users.update(Meteor.userId(), {$addToSet: { 'profile.collaborators': {
            address: this.emails.address,
            username: this.profile.name,
            _id: this._id
        }}}, function(){
            Meteor.flush();
            hidePages();
            showPage('#communityPage');
        });
    },
    'click .user-card': function () {
        Session.set('selected_community_member', this._id);
        Session.set('show_quick_view_panel', true);
        Meteor.flush();
    }
});
Template.userItemTemplate.userEmail = function () {
    log_event('Template.userItemTemplate.userEmail', LogLevel.Trace);
    if(this.emails){
        return this.emails.address;
    }else{
        return 'Emails not available.'
    }
    //return JSON.stringify(this);
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
