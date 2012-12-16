
Template.profilePageTemplate.editing = function () {
    //return Session.equals('editing_profilename', this._id);
    return true;
};
Template.profilePageTemplate.events(okCancelEvents(
    '#profileItems',
    {
        ok: function (value) {
            Meteor.users.update(Meteor.userId(), {$set: {profile: { sometext: value }}});
            Session.set('editing_profile_text', null);
        },
        cancel: function () {
            Session.set('editing_profile_text', null);
        }
    })
);

Template.profilePageTemplate.events({
    'dblclick .display .todo-text': function (evt, tmpl) {
        Session.set('editing_profile_text', this._id);
        Meteor.flush(); // update DOM before focus
        activateInput(tmpl.find("#todo-input"));
    }
});

Template.profilePageTemplate.user_name = function () {
    var currentUser = Meteor.user();
    return currentUser.username;
};
Template.profilePageTemplate.user_id = function () {
    var currentUser = Meteor.user();
    return currentUser._id;
};
Template.profilePageTemplate.user_email = function () {
    var currentUser = Meteor.user();
    if(currentUser){
        log_event("currentUser.profile.sometext: " + currentUser.profile, LogLevel.Trace)
        //var object = jQuery.parseJSON(JSON.stringify(currentUser));
        //return object.emails[0].address;
        return JSON.stringify(currentUser);
    }
};



// --------------------------------------------------------




Template.profilePageTemplate.rendered = function () {

    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        log_event("All the File APIs are supported in this browser.", LogLevel.Notice);
    } else {
        log_event("The File APIs are not fully supported in this browser.", LogLevel.Warning);
    }

    // Setup the drag-and-drop listeners.
    document.getElementById('import_files_input').addEventListener('change', handleFileSelect, false);
    log_event("Set up import_files_input event listener.", LogLevel.Trace);

    var dropZone = document.getElementById('drop_zone');
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect, false);
    dropZone.addEventListener('mousedown', function(){
        jQuery('#import_files_input').click();
    }, false);
    log_event("Set up drop_zone event listeners.", LogLevel.Trace);


    function handleFileSelect(evt) {
        log_event('handleFileSelect(evt)', LogLevel.Trace);

        evt.stopPropagation();
        evt.preventDefault();

        // files is a FileList of File objects. List some properties.
        var files = null;

        // determine how the event got triggered, and get the list of files from the appropriate object.
        if(evt.target.files){
            log_event('drop zone clicked', LogLevel.Trace);
            files = evt.target.files; // FileList object.
        }
        else if(evt.dataTransfer.files){
            log_event('object dropped on drop zone', LogLevel.Trace);
            files = evt.dataTransfer.files; // FileList object.
        }else{
            return false;
        }


        var file = files[0];
        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {
                // Render thumbnail.
                jQuery('#drop_zone').attr("src", e.target.result);;
            };
        })(file);

        // Read in the image file as a data URL.
        if (file.type.match('image.*')) {
            reader.readAsDataURL(file);
        }
    }

    function handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    }




};