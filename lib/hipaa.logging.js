// hipaa.logging.js
// version: 12.16.2012

var logToConsole = true;
var logToScreen = true;
var logToDatabase = false;

// support for api to a proprietary, non MIT licensed system
var logToSplunk = false;

function hipaa_log(){

}
function log_event(message, loglevel){
    //jQuery('#logResultsPanel').html('log: ' + message);

    console.log('LogLevel: ' + loglevel + " - "+ message);
}

LogLevel = {
    Emergency : 0,
    Alert : 1,
    Critical : 2,
    Error: 3,
    Warning: 4,
    Notice: 5,
    Info: 6,
    Debug: 7,
    Trace: 8
}
