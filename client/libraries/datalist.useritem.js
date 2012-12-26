////////// Users List //////////


Template.userItemTemplate.events({
    'click .user-card': function () {
        Meteor.users.update(Meteor.userId(), {$addToSet: { 'profile.collaborators': { address: this.emails[0].address } }});

        //alert(JSON.stringify(this.emails[0].address));
    },

    'click .check': function () {
        //Meteor.users.update(this._id, {$set: {done: !this.done}});
    },

    'click .destroy': function () {
        //Meteor.users.remove(this._id);
    },
    'dblclick .display .todo-text': function (evt, tmpl) {
    }
});


Template.userItemTemplate.userEmail = function () {
    log_event('Template.user_item.userEmail', LogLevel.Trace);
    return this.emails[0].address;
};
Template.userItemTemplate.userHealthEntries = function () {
    log_event('Template.user_item.userHealthEntries', LogLevel.Trace);
    return toInteger(Math.random() * 25000);
};
Template.userItemTemplate.userNetworkSize = function () {
    log_event('Template.user_item.userNetworkSize', LogLevel.Trace);
    return toInteger(Math.random() * 240);
};
Template.userItemTemplate.userHealthRank = function () {
    log_event('Template.user_item.userHealthRank', LogLevel.Trace);
    return toInteger(Math.random() * 100);
};
Template.userItemTemplate.user_image = function () {
    log_event('Template.user_item.user_image', LogLevel.Trace);
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
