// Lists -- {name: String}
Lists = new Meteor.Collection("lists");

// Publish complete set of lists to all clients.
Meteor.publish('lists', function () {
  return Lists.find();
});


// Publish all items for requested list_id.
Meteor.publish('todos', function (list_id) {
  //return Todos.find({list_id: list_id});
    return Todos.find(
      {$or: [{"public": true}, {list_id: list_id}, {invited: this.userId}, {owner: this.userId}]}
    );
});

//Meteor.publish("allUserData", function () {
//    return Meteor.users.find({}, {fields: {
//        '_id': 1,
//        'username': 1,
//        'emails': 1,
//        'sex': 1,
//        'dateOfBirth': 1,
//        'age': 1
//    }});
//});

Meteor.publish("usersDirectory", function () {
    return Meteor.users.find({}, {fields: {
        '_id': true,
        'username': true,
        'profile.avatar': true,
        'emails': true,
        'emails[0].address': true
    }});
});

//Meteor.publish('userProfile', function (userId) {
//    return Meteor.users.find({_id: this.userId}, {fields: {
//        '_id': 1,
//        'username': 1,
//        'profile': 1,
//        'emails': 1,
//        'emails.address': 1,
//        'emails[0].address': 1
//    }});
//});
Meteor.publish('userProfile', function (userId) {
    return Meteor.users.find({_id: this.userId}, {fields: {
        '_id': 1,
        'username': 1,
        'profile': 1,
        'profile.name': 1,
        'profile.avatar': 1,
        'profile.collaborators': 1,
        'profile.currentPage': 1,
        'emails': 1,
        'emails[0].address': 1
    }});
});
