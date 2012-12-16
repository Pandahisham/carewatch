
Template.displayPageTemplate.user_id = function () {
    return Meteor.userId();
};
Template.displayPageTemplate.user_email = function () {
    var currentUser = Meteor.user();
    //var emails = new currentUser.emails[0];
    //var object = jQuery.parseJSON(JSON.stringify(currentUser));
    return Meteor.user().emails[0].address;
    //var sampleUser = {_id: "123", emails: [{ address: "foo@bar.com"}], profile: "something"};
    //return currentUser.emails[0].address;
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
