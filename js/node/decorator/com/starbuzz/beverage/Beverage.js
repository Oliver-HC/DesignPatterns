Beverage = function() {
    this.description = "Unknown Beverage";
}
Beverage.prototype.getDescription = function() {
    return this.description;
}
Beverage.prototype.cost = function() {
    throw new Error("This method must be overwritten!\n");
}