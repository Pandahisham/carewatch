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
    },
    getEnvironment: function(){
        if(process.env.ROOT_URL == "http://localhost:3000"){
            return "development";
        }else{
            return "staging";
        }
    }
});