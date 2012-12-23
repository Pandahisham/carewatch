function cleanPath(str) {
    log_event('Meteor.cleanPath(' + str + ')', LogLevel.Trace);
    if (str) {
        return str.replace(/\.\./g,'').replace(/\/+/g,'').
            replace(/^\/+/,'').replace(/\/+$/,'');
    }
}
function cleanName(str) {
    log_event('Meteor.cleanName(' + str + ')', LogLevel.Trace);

    // grab the filename extension
    var extension = $.trim(str.substr(str.lastIndexOf('.') + 1).toLowerCase());

    // rename the file with the userId, preserving the file extension
    return Meteor.user()._id + '.' + extension;
}