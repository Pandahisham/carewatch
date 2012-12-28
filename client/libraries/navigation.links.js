function hidePages(){
    $('.page').addClass('hidden');
}

function showPage(page){
    hidePages();
    $(page).removeClass('hidden');
    Session.set('current_page', page);
    $("#breadCrumbLink").html(page);
}
function showHomePage(){
    if(Meteor.userId()){
        showPage("#historyPage");
    }else{
        showPage("#guestPage");
    }
}
function showCurrentSessionPage(){
    showPage(Session.get('current_page'));
}