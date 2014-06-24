require('./Clams.js');

FrozenClams = function() {
    Clams.apply(this);
}
FrozenClams.protootype = new Clams();
FrozenClams.protootype.toString = function() {
    return "Frozen Clams from Chesapeake Bay";
}