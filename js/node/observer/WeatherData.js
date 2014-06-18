require('./Subject');

WeatherData = function() {
    Subject.apply(this);
    this.observers = [];
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
    this.registerObserver = function(o) {
        this.observers.push(o);
    }
    this.removeObserver = function(o) {
        var i = this.observers.indexOf(o);
        this.observers.slice(i,i+1);
    }
    this.notifyObservers = function() {
        for(var observer in this.observers)
            this.observers[observer].update(this.temperature, this.humidity, this.pressure);
    }
}
WeatherData.prototype.measurementsChanged = function() {
    this.notifyObservers();
}
WeatherData.prototype.setMeasurements = function(temperature, humidity, pressure) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
}