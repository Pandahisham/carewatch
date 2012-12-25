Template.guestPageTemplate.rendered = function (){
    guestPageLayout();
};
function guestPageLayout(){
    jQuery('#guestPageMainImage').css('top', (window.innerHeight / 2) - 225 );
    jQuery('#guestPageTitle').css('top', (window.innerHeight / 2) - 225 );
    jQuery('#dayOfGlassTwo').css('top', (window.innerHeight / 2) - 225 );
}