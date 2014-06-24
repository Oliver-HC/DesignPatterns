require('./Observer');
require('./DisplayElement');

CurrentConditionsDisplay = function(weatherData) {
    Observer.apply(this);
    DisplayElement.apply(this);
    this.temperature = 0.0;
    this.humidity = 0.0;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
    this.update = function(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }
    this.display = function() {
        console.log("Current conditions: " + this.temperature + " F degrees and " + this.humidity + " humidity");
    }
}