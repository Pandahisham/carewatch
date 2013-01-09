Template.icdPageTemplate.rendered = function () {
    $("#icdEmbed").load("http://en.wikipedia.org/wiki/ICD-10");
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
