require('./Sauce');

MarinaraSauce = function() {
    Sauce.apply(this);
}
MarinaraSauce.prototype = new Sauce;
MarinaraSauce.prototype.toString = function() {
    return "Marinara Sauce";
}