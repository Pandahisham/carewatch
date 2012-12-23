// Client-side JavaScript, bundled and sent to client.

// Define Minimongo collections to match server/publish.js.
Lists = new Meteor.Collection("lists");

// ID of currently selected list
Session.set('list_id', null);

// Name of currently selected tag for filtering
Session.set('tag_filter', null);

// When adding tag to a todo, ID of the todo
Session.set('editing_addtag', null);

// When editing a list name, ID of the list
Session.set('editing_listname', null);

// When editing todo text, ID of the todo
Session.set('editing_itemname', null);

// ID of currently selected page
Session.set('current_page', null);




Template.app_container.loggedIn = function () {
    console.log('loggedIn called');
    if(Meteor.userId()){
        console.log('Meteor.userId(): ' + Meteor.userId());
        return true;
    }else{
        console.log('Meteor.userId() is null');
        return false;
    }
};



Meteor.startup(function () {
    Backbone.history.start({pushState: true});
    hidePages();
    showProfilePage();
});