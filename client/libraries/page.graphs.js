Template.graphSamplePageTemplate.destroyed = function () {
    this.handle && this.handle.stop();
};
Template.graphSamplePageTemplate.rendered = function () {

    var resize = Session.get("resize");
    //var self = this;
    self.node = self.find("svg");

    if (! self.handle) {
        self.handle = Meteor.autorun(function(){
            switch(Session.get("selected_graph")){
                case 'streamgraph':
                    $('#breadCrumbLink').html('EKG & ECG Graphing Algorithm');
                    clearGraphs();
                    renderSteamgraph();
                    break;
                case 'sunburst':
                    $('#breadCrumbLink').html('Patient Outcome Analysis');
                    clearGraphs();
                    renderSunburst();
                    break;
                case 'indentedTree':
                    $('#breadCrumbLink').html('ICD10 Browser');
                    clearGraphs();
                    renderIndentTree();
                    break;
                case 'forceDirectGraph':
                    $('#breadCrumbLink').html('Relationship Network');
                    clearGraphs();
                    renderForceDirectCollapsible();
                    break;
                case 'pillbox':
                    $('#breadCrumbLink').html('Pillbox');
                    clearGraphs();
                    renderPillbox();
                    break;
                default:
                    $('#breadCrumbLink').html('Patient Outcome Analysis');
                    clearGraphs();
                    renderSunburst();
            }




            //renderHierarchicalEdgeGraph();
        });
    };

//    var circles = d3.select(self.node).select(".circles").selectAll("circle")
//        .data(Parties.find().fetch(), function (party) { return party._id; });
};

function clearGraphs(){
    $('#chart').html('');
    $('#networkEdgeChart').html('');
    $('#streamGraphChart').html('');
    $('#forceDirectGraph').html('');
    $('#sunburstChart').html('');
};