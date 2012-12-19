// http://www.html5rocks.com/en/tutorials/file/dndfiles/


//////////// Lists //////////
//Template.import_file_block.events({
//    'mousedown #drop_zone': function () {
//        log_event('importing file');
//        jQuery('#import_files_input').click();
//    }
//});



Template.importPageTemplate.rendered = function () {
    // Resize elements as necessary.
    //jQuery('#main-pane').css('width', window.innerWidth - 250);

    // Check for the various File API support.
    var result = "";
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        log_event("Great success! All the File APIs are supported.");
    } else {
        log_event("The File APIs are not fully supported in this browser.");
    }

    function handleFileSelect(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        // files is a FileList of File objects. List some properties.
        var files = null;

        // determine how the event got triggered, and get the list of files from the appropriate object.
        if(evt.target == "[object HTMLInputElement]"){
            log_event('drop zone clicked');
            files = evt.target.files; // FileList object.
        }
        else if(evt.target == "[object HTMLDivElement]"){
            log_event('object dropped on drop zone');
            files = evt.dataTransfer.files; // FileList object.
        }

        // list files and their properties in the drop_zone panel
        var output = [];
        for (var i = 0, f; f = files[i]; i++) {
            output.push('<li><strong>', escape(f.name), '</strong><br> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                '<br></p></li>');
        }
        // display file thumbnails in
        document.getElementById('drop_zone').innerHTML = '<ul>' + output.join('') + '</ul>';


        if(files.length > 1){
            log_event('multiple files selected');

            // loop through the FileList and render image files as thumbnails.
            jQuery('#file_contents_panel').css('visibility', 'visible');
            for (var i = 0, file; file = files[i]; i++) {

                // Only process image files.
                if (!file.type.match('image.*')) {
                    continue;
                }
                var reader = new FileReader();

                // Closure to capture the file information.
                reader.onload = (function(theFile) {
                    return function(e) {
                        // Render thumbnail.
                        var span = document.createElement('span');
                        span.innerHTML = ['<img class="import_thumbnails" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
                        jQuery('#file_contents_panel').append(span);
                    };
                })(file);

                // Read in the image file as a data URL.
                reader.readAsDataURL(file);
            }
        }
        if(files.length == 1){
            log_event('single file selected');

            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function(theFile) {
                return function(e) {
                    // Render thumbnail.
                    var span = document.createElement('span');
                    span.innerHTML = e.target.result;
                    jQuery('#file_contents_panel').html(span);
                    jQuery('#file_contents_panel').css('visibility', 'visible');
                };
            })(f);

            // Read in the image file as a data URL.
            reader.readAsText(files[0]);
        }

    }

    function handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    }

    // Setup the dnd listeners.
    document.getElementById('import_files_input').addEventListener('change', handleFileSelect, false);

    var dropZone = document.getElementById('drop_zone');
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect, false);
    dropZone.addEventListener('mousedown', function(){
        jQuery('#import_files_input').click();
    }, false);
};

//Template.import_file_block.lists = function () {
//    return Lists.find({}, {sort: {name: 1}});
//};