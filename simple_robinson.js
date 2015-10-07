
function Guassian(sigma_, median_) {
  this.sigma = sigma_;
  this.median = median_;
  this.const = 1/(sigma * Math.sqrt(2 * Mapth.PI));
  this.exp_const = -1/(2 * sigma * sigma);

  this.at = function(x) {
    return this.const * Math.exp(this.exp_const * (x - this.median) * (x - this.median));
  }

  this.max = this.at(0);
}

Person.prototype.new_want = function(id,gaussian) {
  this.wants[id] = gaussian.at(id) * Math.rand();
}


Person.prototype.change_wants = function(magnitude,gaussian) {
  Object.keys(this.wants).forEach(function(id){
    this.wants[id] += magnitude * (2 * Math.rand() - 1) * gaussian.at(id);
  });
}

Person.prototype.new_task = function(id) {
  this.tasks[id] = Math.rand();
}
Person.prototype.change_tasks = function(magnitude) {
  Object.keys(this.tasks).forEach(function(id){
    this.tasks[id] += magnitude * (2 * Math.rand() - 1);
  });
}
var max_wants = 1000;
var max_product_wants = 5;

function Product(id,max_wants, max_product_wants, magnitude){
  this.fulfilled_wants = {};

  var number_of_wants = Math.floor(Math.random() * 5 + 1);
  for(var i = 0; i < number_of_wants; i++) {
    while(true) {
      var id = Math.random() * 1000;
      if (!(id in this.fulfilled_wants)){
        this.fulfilled_wants[id] = magnitude * Math.random();
        break;
      }
    }
  }
}
function Production_process(id) {
this.
}

function Person {
  this.wants = {};

}
