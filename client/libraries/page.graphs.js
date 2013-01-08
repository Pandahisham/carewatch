Template.graphsPageTemplate.destroyed = function () {
    this.handle && this.handle.stop();
};
Template.graphsPageTemplate.rendered = function () {

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

                    // flare.json
                    renderSunburst();
                    break;
                case 'indentedTree':
                    $('#breadCrumbLink').html('ICD10 Browser');
                    clearGraphs();

                    // flare.json
                    renderIndentTree();
                    break;
                case 'forceDirectGraph':
                    $('#breadCrumbLink').html('Relationship Network');
                    clearGraphs();

                    // flare.json
                    renderForceDirectCollapsible();
                    break;
                case 'pillbox':
                    $('#breadCrumbLink').html('Pillbox');
                    clearGraphs();
                    renderPillbox();
                    break;
                case 'bubbleChart':
                    $('#breadCrumbLink').html('Medication Reconciliation');
                    clearGraphs();

                    // flare.json
                    renderBubbleChart();
                    break;
                case 'horizontalBarChart':
                    $('#breadCrumbLink').html('Weekly Calorie Balance');
                    clearGraphs();
                    renderHorizontalBarChart();
                    break;
                case 'collapsibleTreeChart':
                    $('#breadCrumbLink').html('Data Browser');
                    clearGraphs();

                    // flare.json
                    renderCollapsibleTreeChart();
                    break;
                default:
                    $('#breadCrumbLink').html('Patient Outcome Analysis');
                    clearGraphs();

                    // flare.json
                    renderIndentTree();

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
    $('#bubbleChart').html('');
    $('#horizontalBarChart').html('');
    $('#collapsibleTreeChart').html('');
};