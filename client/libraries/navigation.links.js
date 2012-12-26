function hidePages(){
    $('.page').addClass('hidden');
}

function showPage(page){
    hidePages();
    $(page).removeClass('hidden');
    Session.set('current_page', page);
    $("#breadCrumbLink").html(page);
}

