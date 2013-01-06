Template.indentTreePageTemplate.destroyed = function () {
    this.handle && this.handle.stop();
};
Template.indentTreePageTemplate.rendered = function () {

    //var self = this;
    self.node = self.find("svg");

    if (! self.handle) {
        self.handle = Meteor.autorun(function(){

            var width = window.innerWidth,
                height = window.innerHeight - 120,
                radius = Math.min(width, height) / 2,
                color = d3.scale.category20c();

            var svg = d3.select("#chart").append("svg")
                .attr("id", "svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height * .52 + ")");
            log_event('d3 added SVG area to chart element.', LogLevel.Drawing);

            var partition = d3.layout.partition()
                .sort(null)
                .size([2 * Math.PI, radius * radius])
                .value(function(d) { return 1; });
            log_event('d3 added created partition(s).', LogLevel.Drawing);

            var arc = d3.svg.arc()
                .startAngle(function(d) { return d.x; })
                .endAngle(function(d) { return d.x + d.dx; })
                .innerRadius(function(d) { return Math.sqrt(d.y); })
                .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });
            log_event('d3 created arc(s).', LogLevel.Drawing);

            log_event('d3 loading input files', LogLevel.Drawing);
            d3.json("flare.json", function(error, root) {
                log_event('d3 loaded flare.json: ' + root, LogLevel.Drawing);

                var path = svg.datum(root).selectAll("path")
                    .data(partition.nodes)
                    .enter().append("path")
                    .attr("display", function(d) { return d.depth ? null : "none"; }) // hide inner ring
                    .attr("d", arc)
                    .style("stroke", "#fff")
                    .style("fill", function(d) { return color((d.children ? d : d.parent).name); })
                    .style("fill-rule", "evenodd")
                    .each(stash);

                log_event('d3 created paths from datum.', LogLevel.Drawing);

                d3.selectAll("input").on("change", function change() {
                    var value = this.value === "count"
                        ? function() { return 1; }
                        : function(d) { return d.size; };

                    path
                        .data(partition.value(value).nodes)
                        .transition()
                        .duration(1500)
                        .attrTween("d", arcTween);
                });
            });

            // Stash the old values for transition.
            function stash(d) {
                d.x0 = d.x;
                d.dx0 = d.dx;
            }

            // Interpolate the arcs in data space.
            function arcTween(a) {
                var i = d3.interpolate({x: a.x0, dx: a.dx0}, a);
                return function(t) {
                    var b = i(t);
                    a.x0 = b.x;
                    a.dx0 = b.dx;
                    return arc(b);
                };
            }

            d3.select(self.frameElement).style("height", height + "px");



        })
    };

//    var circles = d3.select(self.node).select(".circles").selectAll("circle")
//        .data(Parties.find().fetch(), function (party) { return party._id; });
};


function updateTree(source) {

    // Compute the flattened node list. TODO use d3.layout.hierarchy.
    var nodes = tree.nodes(root);

    // Compute the "layout".
    nodes.forEach(function(n, i) {
        n.x = i * barHeight;
    });

    // Update the nodes…
    var node = vis.selectAll("g.node")
        .data(nodes, function(d) { return d.id || (d.id = ++i); });

    var nodeEnter = node.enter().append("svg:g")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
        .style("opacity", 1e-6);

    // Enter any new nodes at the parent's previous position.
    nodeEnter.append("svg:rect")
        .attr("y", -barHeight / 2)
        .attr("height", barHeight)
        .attr("width", barWidth)
        .style("fill", color)
        .on("click", click);

    nodeEnter.append("svg:text")
        .attr("dy", 3.5)
        .attr("dx", 5.5)
        .text(function(d) { return d.name; });

    // Transition nodes to their new position.
    nodeEnter.transition()
        .duration(duration)
        .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
        .style("opacity", 1);

    node.transition()
        .duration(duration)
        .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
        .style("opacity", 1)
        .select("rect")
        .style("fill", color);

    // Transition exiting nodes to the parent's new position.
    node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
        .style("opacity", 1e-6)
        .remove();

    // Update the links…
    var link = vis.selectAll("path.link")
        .data(tree.links(nodes), function(d) { return d.target.id; });

    // Enter any new links at the parent's previous position.
    link.enter().insert("svg:path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
            var o = {x: source.x0, y: source.y0};
            return diagonal({source: o, target: o});
        })
        .transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function(d) {
            var o = {x: source.x, y: source.y};
            return diagonal({source: o, target: o});
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}

// Toggle children on click.
function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update(d);
}

function color(d) {
    // original
    //return d._children ? "#3182bd" : d.children ? "#c6dbef" : "#fd8d3c";

    //dev
    return d._children ? "#3182bd" : d.children ? "#c6dbef" : "lightgray";

    // white
    //return d._children ? "white" : d.children ? "white" : "white";

    // invisible
    //return d._children ? "none" : d.children ? "none" : "none";
}