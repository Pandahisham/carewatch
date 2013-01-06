Template.hipaaLog.hipaaAudit = function () {
    return Hipaa.find();
}
Template.hipaaLog.hipaaAuditSize = function () {
    return Hipaa.find().count();
}
Template.hipaaEntry.entry_timestamp = function(){
    return new Date(this.timestamp).format("yyyy, mmm d, ddd, HH:MM Z");
}