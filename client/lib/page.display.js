
Template.displayPageTemplate.user_id = function () {
    return Meteor.userId();
};
Template.displayPageTemplate.user_email = function () {
    var currentUser = Meteor.user();
    return currentUser;
    //return displayEmail(currentUser);
    //return "zip";
};

Template.displayPageTemplate.user_info = function () {
    var selectedUser = Meteor.user();
    return JSON.stringify(selectedUser, null, "\t");
};
Template.displayPageTemplate.rendered = function () {
    //var selectedUser = Meteor.user();
    //var result = JSON.stringify(selectedUser, null);
    //var result = "length: " + Meteor.user().length;
    //jQuery('#user-data').html(result);
};
