function showProfilePage(){
    hidePages();
    $('#profilePage').removeClass('hidden');
<<<<<<< HEAD:client/libraries/navigation.links.js
    Session.set('current_page', 'profilePage');
=======
    //Session.set('current_page', 'profilePage');
    //Meteor.users.update(Meteor.userId(), {$set: { 'profile.currentPage': 'profilePage' }});
    //log_event('Setting current page to profilePage.  Result: ' + Meteor.user().profile.currentPage, LogLevel.Info);
>>>>>>> feature-avatars:client/lib/navigation.links.js
}
function showHistoryPage(){
    hidePages();
    $('#historyPage').removeClass('hidden');
<<<<<<< HEAD:client/libraries/navigation.links.js
    Session.set('current_page', 'historyPage');
=======
    //Session.set('current_page', 'historyPage');
    //Meteor.users.update(Meteor.userId(), {$set: { 'profile.currentPage': 'historyPage' }});
    //log_event('Setting current page to historyPage.  Result: ' + Meteor.user().profile.currentPage, LogLevel.Info);
>>>>>>> feature-avatars:client/lib/navigation.links.js
}
function showCommunityPage(){
    hidePages();
    $('#communityPage').removeClass('hidden');
<<<<<<< HEAD:client/libraries/navigation.links.js
    Session.set('current_page', 'communityPage');
=======
    //Session.set('current_page', 'communityPage');
    //Meteor.users.update(Meteor.userId(), {$set: { 'profile.currentPage': 'communityPage' }});
    //log_event('Setting current page to communityPage.  Result: ' + Meteor.user().profile.currentPage, LogLevel.Info);
>>>>>>> feature-avatars:client/lib/navigation.links.js
}
function showVisualizationPage(){
    hidePages();
    $('#visualizationPage').removeClass('hidden');
<<<<<<< HEAD:client/libraries/navigation.links.js
    Session.set('current_page', 'visualizationPage');
}
function showDashboardPage(){
    hidePages();
    $('#dashboardPage').removeClass('hidden');
    Session.set('current_page', 'dashboardPage');
}
function showNewsFeedsPage(){
    hidePages();
    $('#newsFeedsPage').removeClass('hidden');
    Session.set('current_page', 'newsFeedsPage');
=======
    //Session.set('current_page', 'visualizationPage');
    //Meteor.users.update(Meteor.userId(), {$set: { 'profile.currentPage': 'visualizationPage' }});
    //log_event('Setting current page to visualizationPage.  Result: ' + Meteor.user().profile.currentPage, LogLevel.Info);
}
function showNewsPage(){
    hidePages();
    $('#newsFeedPage').removeClass('hidden');
    //Session.set('current_page', 'newsFeedPage');
    //Meteor.users.update(Meteor.userId(), {$set: { 'profile.currentPage': 'newsFeedPage' }});
    //log_event('Setting current page to newsFeedPage.  Result: ' + Meteor.user().profile.currentPage, LogLevel.Info);
>>>>>>> feature-avatars:client/lib/navigation.links.js
}

function hidePages(){
    $('#profilePage').addClass('hidden');
    $('#historyPage').addClass('hidden');
    $('#communityPage').addClass('hidden');
    $('#visualizationPage').addClass('hidden');
<<<<<<< HEAD:client/libraries/navigation.links.js
    $('#dashboardPage').addClass('hidden');
    $('#newsFeedsPage').addClass('hidden');
=======
    $('#newsFeedPage').addClass('hidden');
>>>>>>> feature-avatars:client/lib/navigation.links.js
}