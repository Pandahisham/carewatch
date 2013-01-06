Todos =     new Meteor.Collection("todos");
Anatomy =   new Meteor.Collection("anatomy");
Lists =     new Meteor.Collection("lists");
usersDirectory =     new Meteor.Collection("usersDirectory");
Hipaa =     new Meteor.Collection("hipaa");


Anatomy.allow({
    insert: function(){
        return true;
    },
    update: function () {
        return true;
    },
    remove: function(){
        return true;
    }
});
Hipaa.allow({
    insert: function(){
        return true;
    },
    update: function () {
        return true;
    },
    remove: function(){
        return true;
    }
});

Meteor.users.allow({
    insert: function(userId, todo){
        //return userId && todo.owner === userId;
        //return false;
        return true;
    },
    update: function (userId, todos, fields, modifier) {
        return _.all(todos, function (todo) {
            var allowed = [
                "emails",
                "profile",
                "username"
            ];
            if (_.difference(fields, allowed).length)
                return false; // tried to write to forbidden field

            return true;
        });
    },
    remove: function(userId, todos){
        return true;
    }
});


Todos.allow({
    insert: function(userId, todo){
        //return userId && todo.owner === userId;
        //return false;
        return true;
    },
    update: function (userId, todos, fields, modifier) {
        return _.all(todos, function (todo) {
            //if (userId !== todo.owner)
            //    return false; // not the owner

            var allowed = [
                "anatomy",
                "text",
                "tags",
                "timestamp",
                "public",
                "done",
                "tags"
            ];
            if (_.difference(fields, allowed).length)
                return false; // tried to write to forbidden field

            return true;
        });
    },
    remove: function(userId, todos){
        return true;
    }
});

Meteor.methods({
    createQuestion: function (options) {
        options = options || {};
        if (! (typeof options.text === "string" && options.text.length)){
            throw new Meteor.Error(400, "Required parameter missing");
        }
        if (options.text.length > 100){
            throw new Meteor.Error(413, "Title too long");
        }
        if (! options.list_id ){
            throw new Meteor.Error(413, "No list id!");
        }
//        if (! this.userId)
//            throw new Meteor.Error(403, "You must be logged in");

        log_event('####################################################### ', LogLevel.Info);
        log_event('######### Inserting Todo Item', LogLevel.Info);
        log_event('todo_item.owner:   ' + this.userId);
        log_event(JSON.stringify(options), LogLevel.Info);

        return Todos.insert({
            owner: this.userId,
            text: options.text,
            timestamp: options.timestamp,
            done: options.done,
            list_id: options.list_id,
            public: !! options.public
//            , invited: []
        });
    },
    clearCollaborators: function (userId) {
        Meteor.users.update({ '_id': userId },{$unset: { 'profile.collaborators': '' }});
        log_hipaa_event("Removed all carewatch entries.", LogLevel.Hipaa, userId);
        return true;
    },
    clearCarewatch: function (userId) {
        Meteor.users.update({ '_id': userId },{$unset: { 'profile.carewatch': '' }}, function (){
            log_hipaa_event("Removed all collaborators.", LogLevel.Hipaa, userId);
            return true;
        });
    }
});



///////////////////////////////////////////////////////////////////////////////
// Users

var displayName = function (user) {
    if (user.profile && user.profile.name)
    {
        return user.profile.name;
    }else{
        return "No Profile Name"
    }
};

var displayEmail = function (user) {
    return user.emails[0].address;
};