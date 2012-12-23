Template.profilePageTemplate.editing_email = function () {
    log_event('Template.profilePageTemplate.editing_email', LogLevel.Trace);
    return Session.equals('editing_profile_email', "true");
};
Template.profilePageTemplate.editing_name = function () {
    log_event('Template.profilePageTemplate.editing_name', LogLevel.Trace);
    return Session.equals('editing_profile_name', "true");
};
Template.profilePageTemplate.editing_birthdate = function () {
    log_event('Template.profilePageTemplate.editing_birthdate', LogLevel.Trace);
    return Session.equals('editing_profile_birthdate', "true");
};
Template.profilePageTemplate.editing_avatar = function () {
    log_event('Template.profilePageTemplate.editing_avatar', LogLevel.Trace);
    return Session.equals('editing_profile_avatar', "true");
};
//Template.profilePageTemplate.editing_collaborators = function () {
//    log_event('Template.profilePageTemplate.editing_collaborators', LogLevel.Trace);
//    return Session.equals('editing_profile_collaborators', "true");
//};
//Template.profilePageTemplate.events(
//    okCancelEvents('#userCollaboratorsInput',
//        {
//            ok: function (value) {
//                log_event('userCollaboratorsInput - ok', LogLevel.Trace);
//                Meteor.users.update(Meteor.userId(), {$set: { 'profile.collaborators': value }});
//                Session.set('editing_profile_collaborators', "false");
//                //Meteor.flush(); // update DOM before focus
//            },
//            cancel: function () {
//                log_event('userCollaboratorsInput - cancel', LogLevel.Trace);
//                Session.set('editing_profile_collaborators', "false");
//            }
//        })
//);
Template.profilePageTemplate.events(
    okCancelEvents('#userAvatarInput',
        {
            ok: function (value) {
                log_event('userAvatarInput - ok', LogLevel.Trace);
                Meteor.users.update(Meteor.userId(), {$set: { 'profile.avatar': value }});
                Session.set('editing_profile_avatar', "false");
                //Meteor.flush(); // update DOM before focus
            },
            cancel: function () {
                log_event('userAvatarInput - cancel', LogLevel.Trace);
                Session.set('editing_profile_avatar', "false");
            }
        })
);
Template.profilePageTemplate.events(
    okCancelEvents('#userDateOfBirthInput',
        {
            ok: function (value) {
                log_event('userDateOfBirthInput - ok', LogLevel.Trace);
                Meteor.users.update(Meteor.userId(), {$set: { 'profile.dateOfBirth': value }});
                Session.set('editing_profile_birthdate', "false");
                //Meteor.flush(); // update DOM before focus
            },
            cancel: function () {
                log_event('userDateOfBirthInput - cancel', LogLevel.Trace);
                Session.set('editing_profile_birthdate', "false");
            }
        })
);
Template.profilePageTemplate.events(
    okCancelEvents('#userNameInput',
        {
            ok: function (value) {
                log_event('userNameInput - ok', LogLevel.Trace);
                Meteor.users.update(Meteor.userId(), {$set: { 'profile.name': value }});
                Session.set('editing_profile_name', "false");
                //Meteor.flush(); // update DOM before focus
            },
            cancel: function () {
                log_event('userNameInput - cancel', LogLevel.Trace);
                Session.set('editing_profile_name', "false");
            }
        })
);
Template.profilePageTemplate.events(
    okCancelEvents('#userEmailInput',
        {
            ok: function (value) {
                log_event('userEmailInput - cancel', LogLevel.Trace);
                Meteor.users.update(Meteor.userId(), {$set: { emails: [{address: value }] }});
                Session.set('editing_profile_email', "false");
                //Meteor.flush(); // update DOM before focus
            },
            cancel: function () {
                log_event('userEmailInput - cancel', LogLevel.Trace);
                Session.set('editing_profile_email', "false");
            }
        })
);
Template.profilePageTemplate.events({
    'dblclick .userEmailDisplay': function (evt, tmpl) {
        Session.set('editing_profile_email', "true");
        Meteor.flush(); // update DOM before focus
        activateInput(tmpl.find("#profile-input-email"));
    },
    'dblclick .userNameDisplay': function (evt, tmpl) {
        Session.set('editing_profile_name', "true");
        Meteor.flush(); // update DOM before focus
        activateInput(tmpl.find("#profile-input-name"));
    },
    'dblclick .userDateOfBirthDisplay': function (evt, tmpl) {
        Session.set('editing_profile_birthdate', "true");
        Meteor.flush(); // update DOM before focus
        activateInput(tmpl.find("#profile-input-birth-date"));
    },
    'dblclick .userAvatarDisplay': function (evt, tmpl) {
        Session.set('editing_profile_avatar', "true");
        Meteor.flush(); // update DOM before focus
        activateInput(tmpl.find("#profile-input-avatar"));
    },//    'dblclick .userCollaboratorsDisplay': function (evt, tmpl) {
//        Session.set('editing_profile_collaborators', "true");
//        Meteor.flush(); // update DOM before focus
//        activateInput(tmpl.find("#profile-input-collaborator"));
//    },
    'change input': function(ev) {
        _.each(ev.srcElement.files, function(file) {
            Meteor.saveFile(file, file.name);
        });
    }
});

Template.profilePageTemplate.user_name = function () {
    try{
        if(Meteor.user().profile){
            return Meteor.user().profile.name;
        }else{
            return "Meteor.user().profile not available right now."
        }
    }
    catch(err){
        log_event(err, LogLevel.Error);
    }
};
Template.profilePageTemplate.user_id = function () {
    try{
        if(Meteor.user()){
            return Meteor.user()._id;
        }else{
            return "UserId not found."
        }
    }
    catch(err){
        log_error(err,LogLevel.Error);
    }
};
Template.profilePageTemplate.user_email = function () {
    try
    {
        if(Meteor.user().emails){
            return Meteor.user().emails[0].address;
        }else{
            return "User email address not available right now.";
        }
    }
    catch(err)
    {
        log_event(err, LogLevel.Error);
    }
};
Template.profilePageTemplate.user_birthdate = function () {
    try{
        if(Meteor.user().profile){
            return Meteor.user().profile.dateOfBirth;
        }else{
            return "User birthdate not available right now.";
        }
    }
    catch(err){
        log_event(err, LogLevel.Error);
    }
};
Template.profilePageTemplate.user_avatar = function () {
    try{
        if(Meteor.user().profile){
            return Meteor.user().profile.avatar;
        }else{
            return "User birthdate not available right now.";
        }
    }
    catch(err){
        log_event(err, LogLevel.Error);
    }
};
//Template.profilePageTemplate.user_collaborators = function () {
//    if(Meteor.user().profile){
//        return Meteor.user().profile.collaborators;
//    }else{
//        return "List of collaborators not available right now.";
//    }
//};

Template.profilePageTemplate.user_json = function () {
    var selectedUser = Meteor.user();
    return JSON.stringify(selectedUser);
};
Template.profilePageTemplate.user_image = function () {
    try{
        var src = "images/placeholder-240x240.gif";
        if(Meteor.user()){
            src = "userspace/avatars/" +  Meteor.user().profile.avatar;
        }
        log_event('profile avatar src: ' + src, LogLevel.Info);
        return src;
    }
    catch(err){
        log_event(err, LogLevel.Error);
    }
};


// --------------------------------------------------------
// SELECT AVATAR - DRAG, DROP, & FILE SAVE FUNCTIONS



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