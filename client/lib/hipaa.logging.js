var logToConsole = true;
var logToScreen = true;
var logToDatabase = false;

// support for api to a proprietary, non MIT licensed system
var logToSplunk = false;

function hipaa_log(){

}
function log_event(message){
    //jQuery('#logResultsPanel').html('log: ' + message);
    console.log('log: ' + message);
}
