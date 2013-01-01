

//Template.communityPageTemplate.events(okCancelEvents(
//    '#new-user',
//    {
//        ok: function (text, evt) {
//            console.log('ok called on new todo item');
//            var tag = Session.get('tag_filter');
//            console.log('tags: ' + tag);
//
////            users.insert({
////                text: text,
////                list_id: Session.get('list_id'),
////                done: false,
////                timestamp: (new Date()).getTime(),
////                tags: tag ? [tag] : []
////            });
//            console.log('text.length: ' + text.length);
//            if (text.length) {
//                console.log('text: ' + text);
//                console.log('list_id: ' + Session.get('list_id'));
//                console.log('owner: ' + Meteor.userId());
//
////                Meteor.call('createQuestion', {
////                    text: text,
////                    list_id: Session.get('list_id'),
////                    done: false,
////                    timestamp: (new Date()).getTime(),
////                    tags: tag ? [tag] : [],
////                    owner: Meteor.userId,
////                    tags: tag ? [tag] : [],
////                    public: 'public'
////                }, function (error, todo) {
////                    console.log('error: ' + error);
////                    console.log('todo: ' + todo);
////                });
//            } else {
//                Session.set("createError",
//                    "It needs a title and a description, or why bother?");
//            }
//
//            evt.target.value = '';
//        }
//    })
//);


//Template.players.isMemberOf = function (userRole) {
//    return this.userRole === userRole;
//};



//    // Check for the various File API support.
//    if (window.File && window.FileReader && window.FileList && window.Blob) {
//        log_event("All the File APIs are supported in this browser.", LogLevel.Notice);
//    } else {
//        log_event("The File APIs are not fully supported in this browser.", LogLevel.Warning);
//    }
//
//    // Setup the drag-and-drop listeners.
//    document.getElementById('import_files_input').addEventListener('change', handleFileSelect, false);
//    log_event("Set up import_files_input event listener.", LogLevel.Trace);
//
//    var dropZone = document.getElementById('drop_zone');
//    dropZone.addEventListener('dragover', handleDragOver, false);
//    dropZone.addEventListener('drop', handleFileSelect, false);
//    log_event("Set up drop_zone event listeners.", LogLevel.Trace);
//
//
//    function handleFileSelect(evt) {
//        log_event('handleFileSelect(evt)', LogLevel.Trace);
//
//        evt.stopPropagation();
//        evt.preventDefault();
//
//        // files is a FileList of File objects. List some properties.
//        var files = null;
//
//        // determine how the event got triggered, and get the list of files from the appropriate object.
//        if(evt.target.files){
//            log_event('drop zone clicked', LogLevel.Trace);
//            files = evt.target.files; // FileList object.
//        }
//        else if(evt.dataTransfer.files){
//            log_event('object dropped on drop zone', LogLevel.Trace);
//            files = evt.dataTransfer.files; // FileList object.
//        }else{
//            return false;
//        }
//
//
//        var file = files[0];
//        var reader = new FileReader();
//
//        // Closure to capture the file information.
//        reader.onload = (function(theFile) {
//            return function(e) {
//                // Render thumbnail.
//                jQuery('#drop_zone').attr("src", e.target.result);;
//            };
//        })(file);
//
//        // Read in the image file as a data URL.
//        if (file.type.match('image.*')) {
//            reader.readAsDataURL(file);
//        }
//    }
//
//    function handleDragOver(evt) {
//        evt.stopPropagation();
//        evt.preventDefault();
//        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
//    }
//};
