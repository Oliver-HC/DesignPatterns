require('./Observer');
require('./DisplayElement');

ForecastDisplay = function(weatherData) {
    Observer.apply(this);
    DisplayElement.apply(this);
    this.currentPressure = 29.92;
    this.lastPressure = 0.0;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
    this.update = function(temperature, humidity, pressure) {
        this.lastPressure = this.currentPressure;
        this.currentPressure = pressure;
        this.display();
    }
    this.display = function() {
        console.log("Forecast: ");
        if(this.currentPressure > this.lastPressure)
            console.log("Improving weather on the way!");
        else if(this.currentPressure == this.lastPressure)
            console.log("More of the same");
        else if(this.currentPressure < this.lastPressure)
            console.log("Watch out for cooler, rainy weather");
    }
}