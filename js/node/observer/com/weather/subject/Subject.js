Subject = function() {
    this.registerObserver = function() {
        throw new Error("This method must be overwritten!\n");
    }
    this.removeObserver = function() {
        throw new Error("This method must be overwritten!\n");
    }
    this.notifyObservers = function() {
        throw new Error("This method must be overwritten!\n");
    }
}