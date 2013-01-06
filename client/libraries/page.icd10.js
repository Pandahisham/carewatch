Template.icdPageTemplate.rendered = function () {
};
Template.icdList.icdCatalog = function(){
    return Icd10.find();
};
Template.icdItemTemplate.json = function () {
    return JSON.stringify(this);
}
//Template.icdPageTemplate.rendered = function () {
//    return Diseases.find();
//};
