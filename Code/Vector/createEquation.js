/***********************************************************************************/
// Create Equation

createVector.prototype.create_equation = function(){
  var symbol = this.symbol;
  this.div = d3.select('body').append('div');
  this.xEquation = this.div.append('text').html('\\( ' +symbol+ '_x = ' +symbol+ '_r*cos( ' +symbol+ '_\\theta ) \\)' + '<br>');
  this.yEquation = this.div.append('text').html('\\( ' +symbol+ '_y = ' +symbol+ '_r*sin( ' +symbol+ '_\\theta ) \\)');
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

/***********************************************************************************/
// Setup Equation

createVector.prototype.setup_equation = function(){
  this.div.styles({ 'position': 'absolute' })
}

/***********************************************************************************/
// Update Equation

createVector.prototype.update_equation = function(){
  this.div.styles({ 'top': this.cy + this.r + 10, 'left': this.cx - 0.5*parseInt(this.div.style('width')) });
  if(this.vector_mode == 'polar'){ this.div.styles({ 'display': 'none' }); }
  if(this.vector_mode == 'cartesian'){ this.div.styles({ 'display': null }); }
  this.xEquation.html('\\( ' +symbol+ '_x = ' +this.r+ '*cos( ' +this.angle+ ' ) \\)');
  this.yEquation.html('\\( ' +symbol+ '_y = ' +this.r+ '*sin( ' +this.angle+ ' ) \\)');
}

/***********************************************************************************/
// Setup view Equation

createVector.prototype.setup_view_equation = function(){
}
