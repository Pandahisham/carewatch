////////// Todos //////////

Template.historyPageTemplate.helpers(genericUserDisplayObject);

Template.health_entries.any_list_selected = function () {
    return !Session.equals('list_id', null);
};

Template.health_entries.events(okCancelEvents(
    '#new-todo',
    {
        ok: function (text, evt) {
            log_event('ok called on new todo item', LogLevel.Trace);
            var tag = Session.get('tag_filter');
            log_event('tags: ' + tag, LogLevel.Trace);

//            Todos.insert({
//                text: text,
//                list_id: Session.get('list_id'),
//                done: false,
//                timestamp: (new Date()).getTime(),
//                tags: tag ? [tag] : []
//            });
            log_event('text.length: ' + text.length, LogLevel.Trace);
            if (text.length) {
                console.log('text: ' + text);
                console.log('list_id: ' + Session.get('list_id'));
                console.log('owner: ' + Meteor.userId());

                Meteor.call('createQuestion', {
                    text: text,
                    list_id: Session.get('list_id'),
                    done: false,
                    timestamp: (new Date()).getTime(),
                    tags: tag ? [tag] : [],
                    owner: Meteor.user()._id,
                    tags: tag ? [tag] : [],
                    public: 'public'
                }, function (error, todo) {
                    console.log('error: ' + error);
                    console.log('todo: ' + todo);
//                    if (! error) {
//                        Session.set("selected", todo);
//                        if (! public && Meteor.users.find().count() > 1)
//                            openInviteDialog();
//                    }
                });
                //Session.set("showCreateDialog", false);
            } else {
                Session.set("createError",
                    "It needs a title and a description, or why bother?");
            }

            evt.target.value = '';
        }
    })
);


Template.health_entries.health_items = function () {
    // Determine which todos to display in main pane,
    // selected based on list_id and tag_filter.

    //var list_id = Session.get('list_id');
    //if (!list_id)
    //    return {};

    var sel = {owner: Meteor.user()._id};
    //var sel = {list_id: list_id};
    //var tag_filter = Session.get('tag_filter');
    //if (tag_filter)
    //    sel.tags = tag_filter;

    return Todos.find(sel, {sort: {timestamp: -1}});
};

Template.health_entry.tag_objs = function () {
    var todo_id = this._id;
    return _.map(this.tags || [], function (tag) {
        return {todo_id: todo_id, tag: tag};
    });
};

Template.health_entry.done_class = function () {
    return this.done ? 'done' : '';
};

Template.health_entry.done_checkbox = function () {
    return this.done ? 'checked="checked"' : '';
};

Template.health_entry.editing = function () {
    return Session.equals('editing_itemname', this._id);
};

Template.health_entry.adding_tag = function () {
    return Session.equals('editing_addtag', this._id);
};
Template.health_entry.anatomy_image = function () {
    //return Session.equals('editing_addtag', this._id);
    if(this.anatomy){
        log_event('*************', LogLevel.Info);
        log_event('anatomyId: ' + this.anatomy, LogLevel.Info);
        log_event(JSON.stringify(Anatomy.findOne(this.anatomy)), LogLevel.Info);
        var record = Anatomy.findOne(this.anatomy);
        return record.image;
        //return "images/placeholder-240x240.gif";
    }else{
        return "images/placeholder-240x240.gif";
    }
};
Template.health_entry.display_anatomy = function () {
    if(this.anatomy){
        return "";
    }else{
        return "hidden";
    }
};

Template.health_entry.events({
//    'click .todo': function () {
//        alert(JSON.stringify(this));
//    },
    'click .check': function () {
        Todos.update(this._id, {$set: {done: !this.done}});
    },

    'click .destroy': function () {
        Todos.remove(this._id);
    },
    'click .todo-image': function (evt, tmpl) {
        //Session.set('editing_addtag', this._id);
        showPage('#snomedPage');
        //alert(JSON.stringify(this));
        Session.set('selecting_anatomy', this._id);
        Meteor.flush(); // update DOM before focus
    },
    'click .addtag': function (evt, tmpl) {
        Session.set('editing_addtag', this._id);
        Meteor.flush(); // update DOM before focus
        activateInput(tmpl.find("#edittag-input"));
    },
    'dblclick .display .todo-text': function (evt, tmpl) {
        Session.set('editing_itemname', this._id);
        Meteor.flush(); // update DOM before focus
        activateInput(tmpl.find("#todo-input"));
    },

    'click .remove': function (evt) {
        var tag = this.tag;
        var id = this.todo_id;

        evt.target.parentNode.style.opacity = 0;
        // wait for CSS animation to finish
        Meteor.setTimeout(function () {
            Todos.update({_id: id}, {$pull: {tags: tag}});
        }, 300);
    }
});

Template.health_entry.events(okCancelEvents(
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

Template.health_entry.events(okCancelEvents(
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
