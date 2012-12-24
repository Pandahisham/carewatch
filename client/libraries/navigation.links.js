function showProfilePage(){
    hidePages();
    $('#profilePage').removeClass('hidden');
    //Session.set('current_page', 'profilePage');
    //Meteor.users.update(Meteor.userId(), {$set: { 'profile.currentPage': 'profilePage' }});
    //log_event('Setting current page to profilePage.  Result: ' + Meteor.user().profile.currentPage, LogLevel.Info);
}
function showHistoryPage(){
    hidePages();
    $('#historyPage').removeClass('hidden');
    //Session.set('current_page', 'historyPage');
    //Meteor.users.update(Meteor.userId(), {$set: { 'profile.currentPage': 'historyPage' }});
    //log_event('Setting current page to historyPage.  Result: ' + Meteor.user().profile.currentPage, LogLevel.Info);
}
function showCommunityPage(){
    hidePages();
    $('#communityPage').removeClass('hidden');
    //Session.set('current_page', 'communityPage');
    //Meteor.users.update(Meteor.userId(), {$set: { 'profile.currentPage': 'communityPage' }});
    //log_event('Setting current page to communityPage.  Result: ' + Meteor.user().profile.currentPage, LogLevel.Info);
}
function showVisualizationPage(){
    hidePages();
    $('#visualizationPage').removeClass('hidden');
    Session.set('current_page', 'visualizationPage');
}
function showNewsPage(){
    hidePages();
    $('#newsFeedsPage').removeClass('hidden');
    //Session.set('current_page', 'newsFeedPage');
    //Meteor.users.update(Meteor.userId(), {$set: { 'profile.currentPage': 'newsFeedPage' }});
    //log_event('Setting current page to newsFeedPage.  Result: ' + Meteor.user().profile.currentPage, LogLevel.Info);
}

function showDashboardPage(){
    hidePages();
    $('#dashboardPage').removeClass('hidden');
    Session.set('current_page', 'dashboardPage');
}

function hidePages(){
    $('#profilePage').addClass('hidden');
    $('#historyPage').addClass('hidden');
    $('#communityPage').addClass('hidden');
    $('#visualizationPage').addClass('hidden');
    $('#dashboardPage').addClass('hidden');
    $('#newsFeedsPage').addClass('hidden');
}