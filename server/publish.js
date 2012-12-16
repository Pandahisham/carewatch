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
        'emails': true,
        'emails[0].address': true
    }});
});
Meteor.publish("users", function () {
    return Meteor.users.find({}, {fields: {
        '_id': true,
        'username': true,
        'emails': true,
        'emails[0].address': true
    }});
});