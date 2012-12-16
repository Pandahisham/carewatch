////////// Lists //////////

Template.categories.categories = function () {
    return Lists.find({}, {sort: {name: 1}});
};
Template.categories.count = function () {
    //TODO:  add tally of number of todos in a list
    return Todos.find({list_id: this._id}).count();
};

Template.categories.events({
    'mousedown .category': function (evt) { // select list
        Router.setList(this._id);
    },
    'click .category': function (evt) {
        // prevent clicks on <a> from refreshing the page.
        evt.preventDefault();
    },
    'dblclick .category': function (evt, tmpl) { // start editing list name
        Session.set('editing_listname', this._id);
        Meteor.flush(); // force DOM redraw, so we can focus the edit field
        activateInput(tmpl.find("#list-name-input"));
    }
});

// Attach events to keydown, keyup, and blur on "New list" input box.
Template.categories.events(okCancelEvents(
    '#new-category',
    {
        ok: function (text, evt) {
            var id = Lists.insert({name: text});
            Router.setList(id);
            evt.target.value = "";
        }
    }));

Template.categories.events(okCancelEvents(
    '#category-name-input',
    {
        ok: function (value) {
            Lists.update(this._id, {$set: {name: value}});
            Session.set('editing_listname', null);
        },
        cancel: function () {
            Session.set('editing_listname', null);
        }
    }));

Template.categories.selected = function () {
    return Session.equals('list_id', this._id) ? 'selected' : '';
};

Template.categories.name_class = function () {
    return this.name ? '' : 'empty';
};

Template.categories.editing = function () {
    return Session.equals('editing_listname', this._id);
};