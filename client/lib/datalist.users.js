////////// Users List //////////

Template.userslist.rendered = function (){
    var options = {
        valueNames: [ 'user-email', 'user-posts', 'user-rank' ]
    };
    var communityList = new List('community-members-list', options);
};
Template.userslist.events(okCancelEvents(
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


Template.userslist.user_count = function () {
    var usersList = Meteor.users.find();
    return usersList.count();
};


Template.userslist.users = function () {
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
    console.log('searching for users');
    return Meteor.users.find();
};


Template.user_item.events({
    'click .check': function () {
        //Meteor.users.update(this._id, {$set: {done: !this.done}});
    },

    'click .destroy': function () {
        //Meteor.users.remove(this._id);
    },
    'dblclick .display .todo-text': function (evt, tmpl) {
        //Session.set('editing_itemname', this._id);
        //Meteor.flush(); // update DOM before focus
        //activateInput(tmpl.find("#todo-input"));
    }
});

Template.user_item.events(okCancelEvents(
    '#todo-input',
    {
        ok: function (value) {
            //Meteor.users.update(this._id, {$set: {text: value}});
            //Session.set('editing_itemname', null);
        },
        cancel: function () {
            //Session.set('editing_itemname', null);
        }
}));
Template.user_item.userEmail = function () {
    return this.emails[0].address;
};
Template.user_item.userHealthEntries = function () {
    return toInteger(Math.random() * 25000);
};
Template.userslist.userNetworkSize = function () {
    return toInteger(Math.random() * 240);
};
Template.user_item.userHealthRank = function () {
    return toInteger(Math.random() * 100);
};
//Template.players.isMemberOf = function (userRole) {
//    return this.userRole === userRole;
//};
function toInteger(number){
    return Math.round(  // round to nearest integer
        Number(number)    // type cast your input
    );
};