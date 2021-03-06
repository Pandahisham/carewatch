function hidePages(){
    $('.page').addClass('hidden');
}

function showPage(page){
    hidePages();
    $(page).removeClass('hidden');
    Session.set('current_page', page);
    parseBreadCrumbs(page);
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
function parseBreadCrumbs(page){
    switch(page){
    case '#hipaaPage':
            $('#breadCrumbLink').html('HIPAA Audit');
            break;
    case '#newsPage':
        $('#breadCrumbLink').html('Carewatch');
        break;
    case '#historyPage':
        $('#breadCrumbLink').html('History');
        break;
    case '#communityPage':
        $('#breadCrumbLink').html('Community');
        break;
    case '#profilePage':
        $('#breadCrumbLink').html('Profile');
        break;
    case '#snomedPage':
        if(Session.get('selecting_anatomy')){
            $('#breadCrumbLink').html('Select the Anatomy of Interest');
        }else{
            $('#breadCrumbLink').html('Snomed Anatomy (Alpha)');
        }
        break;
    case '#icd10Page':
        $('#breadCrumbLink').html('International Classificaiton of Diseases');
        break;
    default:
        $('#breadCrumbLink').html('');
        //alert(page);
    }
}

