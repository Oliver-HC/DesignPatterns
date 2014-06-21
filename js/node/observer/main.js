require('./WeatherData');

require('./CurrentConditionsDisplay');
require('./StatisticsDisplay');
require('./ForecastDisplay');
require('./HeatIndexDisplay');

var weatherData = new WeatherData();
var currentconditionsDisplay = new CurrentConditionsDisplay(weatherData);
var forecastDisplay = new ForecastDisplay(weatherData);
var statisticsDisplay = new StatisticsDisplay(weatherData);
var heatIndexDisplay = new HeatIndexDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);