Pizza = function() {
    this.name = null;

    this.dough = null;
    this.sauce = null;
    this.veggies = null;
    this.cheese = null;
    this.pepperoni = null;
    this.clam = null;
}
Pizza.prototype.prepare = function() {
    throw new Error("This method must be overwritten!");
}
Pizza.prototype.bake = function() {
    console.log("Bake for 25 minutes at 350");
}
Pizza.prototype.cut = function() {
    console.log("Cutting the pizza into diagonal slices");
}
Pizza.prototype.box = function() {
    console.log("Place pizza in official PizzaStore box");
}
Pizza.prototype.setName = function(name) {
    this.name = name;
}
Pizza.prototype.getName = function() {
    return this.name;
}
Pizza.prototype.toString = function() {
    var result = [];
    result.push("---- " + this.name + " ----\n");
    if(this.dough != null) {
        result.push(this.dough);
        result.push("\n");
    }
    if(this.sauce != null) {
        result.push(this.sauce);
        result.push("\n");
    }
    if(this.cheese != null) {
        result.push(this.cheese);
        result.push("\n");
    }
    if(this.veggies != null) {
        for(var veggie in this.veggies) {
            result.push(this.veggies[veggie]);
            result.push(", ");
        }
        result.pop();
        result.push("\n");
    }
    if(this.clam != null) {
        result.push(this.clam);
        result.push("\n");
    }
    if(this.pepperoni != null) {
        result.push(this.pepperoni);
        result.push("\n");
    }
    return result.join("");
}