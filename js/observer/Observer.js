var Subject = function() {
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

var WeatherData = function() {
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

var Observer = function() {
    this.update = function() {
        throw new Error("This method must be overwritten!\n");
    }
}

var DisplayElement = function() {
    this.display = function() {
        throw new Error("This method must be overwritten!\n");
    }
}

var CurrentConditionsDisplay = function(weatherData) {
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

var ForecastDisplay = function(weatherData) {
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

var StatisticsDisplay = function(weatherData) {
    Observer.apply(this);
    DisplayElement.apply(this);
    this.maxTemp = 0.0;
    this.minTemp = 200;
    this.tempSum = 0.0;
    this.numReadings = 0;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
    this.update = function(temp, humidity, pressure) {
        this.tempSum += temp;
        this.numReadings += 1;

        if(temp > this.maxTemp)
            this.maxTemp = temp;
        if(temp < this.minTemp)
            this.minTemp = temp;

        this.display();
    }
    this.display = function() {
        console.log("Avg/Max/Min temperature = " + this.tempSum/this.numReadings + "/" + this.maxTemp + "/" + this.minTemp);
    }
}

var HeatIndexDisplay = function(weatherData) {
    Observer.apply(this);
    DisplayElement.apply(this);
    this.heatIndex = 0.0;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
    this.update = function(t, rh, pressure) {
        this.heatIndex = this.computeHeatIndex(t, rh);
        this.display();
    }
    this.display = function() {
        console.log("Heat index is " + this.heatIndex);
    }
}
HeatIndexDisplay.prototype.computeHeatIndex = function(t, rh) {
    var index = (16.923 + (0.185212 * t) + (5.37941 * rh) - (0.100254 * t * rh) +
            (0.00941695 * (t * t)) + (0.00728898 * (rh * rh)) +
            (0.000345372 * (t * t * rh)) - (0.000814971 * (t * rh * rh)) +
            (0.0000102102 * (t * t * rh * rh)) - (0.000038646 * (t * t * t)) + (0.0000291583 *
            (rh * rh * rh)) + (0.00000142721 * (t * t * t * rh)) +
            (0.000000197483 * (t * rh * rh * rh)) - (0.0000000218429 * (t * t * t * rh * rh)) +
            0.000000000843296 * (t * t * rh * rh * rh)) -
            (0.0000000000481975 * (t * t * t * rh * rh * rh));
    return index;
}

var weatherData = new WeatherData();
var currentconditionsDisplay = new CurrentConditionsDisplay(weatherData);
var forecastDisplay = new ForecastDisplay(weatherData);
var statisticsDisplay = new StatisticsDisplay(weatherData);
var heatIndexDisplay = new HeatIndexDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);