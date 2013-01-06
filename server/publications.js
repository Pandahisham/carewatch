// Publish complete set of lists to all clients.
Meteor.publish('anatomy', function () {
    return Anatomy.find();
});
Meteor.publish('hipaa', function () {
    return Hipaa.find();
});
Meteor.publish('icd10', function () {
    return Icd10.find();
});

// not used anymore
// but be careful about removing until routing.js is taken care of
Meteor.publish('lists', function () {
    return Lists.find();
});


// Publish all items for requested list_id.
// We've ripped out most all of the list functionality from the UI
// and needed to remove the list_id references
Meteor.publish('todos', function (list_id) {
  //return Todos.find({list_id: list_id});
    return Todos.find(
      {$or: [{"public": true}, {list_id: list_id}, {invited: this.userId}, {owner: this.userId}]}
    );
});


// Publish users directory and user profile
Meteor.publish("usersDirectory", function () {
    return Meteor.users.find({}, {fields: {
        '_id': true,
        'username': true,
        'profile': true,
        'profile.name': true,
        'profile.avatar': true,
        'emails': true,
        'emails[0].address': true,
        'emails.address': true
    }});
});
Meteor.publish('userProfile', function (userId) {
    return Meteor.users.find({_id: this.userId}, {fields: {
        '_id': 1,
        'username': 1,
        'profile': 1,
        'profile.name': 1,
        'profile.avatar': 1,
        'profile.collaborators': 1,
        'profile.carewatch': 1,
        'profile.currentPage': 1,
        'emails': 1,
        'emails[0].address': 1
    }});
});