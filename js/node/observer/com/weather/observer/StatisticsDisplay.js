require('./Observer');
require('./DisplayElement');

StatisticsDisplay = function(weatherData) {
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