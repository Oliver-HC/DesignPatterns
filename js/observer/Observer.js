var Subject = function() {}
Subject.prototype.registerObserver = function() {
    throw new Error("This method must be overwritten!\n");
}
Subject.prototype.removeObserver = function() {
    throw new Error("This method must be overwritten!\n");
}
Subject.prototype.notifyObservers = function() {
    throw new Error("This method must be overwritten!\n");
}