function showProfilePage(){
    hidePages();
    $('#profilePage').removeClass('hidden');
    Session.set('current_page', 'profilePage');
}
function showHistoryPage(){
    hidePages();
    $('#historyPage').removeClass('hidden');
    Session.set('current_page', 'historyPage');
}
function showCommunityPage(){
    hidePages();
    $('#communityPage').removeClass('hidden');
    Session.set('current_page', 'communityPage');
}
function showVisualizationPage(){
    hidePages();
    $('#visualizationPage').removeClass('hidden');
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
}

function hidePages(){
    $('#profilePage').addClass('hidden');
    $('#historyPage').addClass('hidden');
    $('#communityPage').addClass('hidden');
    $('#visualizationPage').addClass('hidden');
    $('#dashboardPage').addClass('hidden');
    $('#newsFeedsPage').addClass('hidden');
}