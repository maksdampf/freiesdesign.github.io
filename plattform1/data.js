var w = 400,
	h = 400;
 
var colorscale = d3.scale.ordinal()
    .range(["#F90B6D", "#cc0a8c","#888888","#ffaaaa", "transparent"]);
 
//Legend titles
var LegendOptions = ['Thingiverse','Github', 'Instructables', 'Grabcad'];
 
//Data
var d = [
		  [
			{axis:"3D Druck",value:4},
			{axis:"Lasercut / CNC",value:2},
			{axis:"Anleitungen",value:0},
			{axis:"Text / Code",value:0},
			{axis:"Normteile",value:1},
		  ],[
			{axis:"3D Druck",value:1},
			{axis:"Lasercut / CNC",value:1},
			{axis:"Anleitungen",value:2},
			{axis:"Text / Code",value:4},
			{axis:"Normteile",value:0},
		  ],
		  [
			{axis:"3D Druck",value:0},
			{axis:"Lasercut / CNC",value:3},
			{axis:"Anleitungen",value:4},
			{axis:"Text / Code",value:2},
			{axis:"Normteile",value:0},
		  ],
		    [
			{axis:"3D Druck",value:2},
			{axis:"Lasercut / CNC",value:0},
			{axis:"Anleitungen",value:0},
			{axis:"Text / Code",value:0},
			{axis:"Normteile",value:4},
		  ],
		  [
			{axis:"3D Druck",value:5},
			{axis:"Lasercut / CNC",value:5},
			{axis:"Anleitungen",value:5},
			{axis:"Text / Code",value:5},
			{axis:"Normteile",value:5},
		  ],
		  
		  
		];
 
//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 5,
  ExtraWidthX: 300
}
 
//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw('#chart', d, mycfg);
 
////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////
 
var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h+300)
 
//Create the title for the legend
//var text = svg.append("text")
//	.attr("class", "title")
//	.attr("x", w+(w/2) )
//	.attr("y", h+80)
//	.attr("text-anchor", "middle")
//	.attr("font-size", "18px")
//	.attr("font-weight", 500)
//	.text("Legende");
		
// //Initiate Legend	
 var legend = svg.append("g")
 	.attr("class", "legend")
 	.attr("height", 100)
 	.attr("width", 200)
 	.attr('transform', 'translate(90,20)') 
 	;
// 	//Create colour squares
 	legend.selectAll('rect')
 	  .data(LegendOptions)
 	  .enter()
 	  .append("rect")
 	  .attr("x", w - 65)
 	  .attr("y", function(d, i){ return i * 20;})
 	  .attr("width", 15)
 	  .attr("height", 15)
 	  .style("fill", function(d, i){ return colorscale(i);})
 	  ;
// 	//Create text next to squares
 	legend.selectAll('text')
 	  .data(LegendOptions)
 	  .enter()
 	  .append("text")
 	  .attr("x", w - 40)
 	  .attr("y", function(d, i){ return i * 20 + 12;})
 	  .attr("font-size", "15px")
 	  .attr("fill", "#737373")
 	  .text(function(d) { return d; })
 	  ;	
