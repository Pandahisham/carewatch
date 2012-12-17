function showProfilePage(){
    hidePages();
    $('#profilePage').removeClass('hidden');
}
function showHistoryPage(){
    hidePages();
    $('#historyPage').removeClass('hidden');
}
function showCommunityPage(){
    hidePages();
    $('#communityPage').removeClass('hidden');
}
function showVisualizationPage(){
    hidePages();
    $('#visualizationPage').removeClass('hidden');
}
function hidePages(){
    $('#profilePage').addClass('hidden');
    $('#historyPage').addClass('hidden');
    $('#communityPage').addClass('hidden');
    $('#visualizationPage').addClass('hidden');
}