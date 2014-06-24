require('./Clams.js');

FreshClams = function() {
    Clams.apply(this);
}
FreshClams.protootype = new Clams();
FreshClams.protootype.toString = function() {
    return "Fresh Clams from Long Island Sound";
}