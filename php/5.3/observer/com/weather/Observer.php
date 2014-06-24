<?
include_once("./subject/WeatherData.php");

include_once("./observer/CurrentConditionsDisplay.php");
include_once("./observer/StatisticsDisplay.php");
include_once("./observer/ForecastDisplay.php");
include_once("./observer/HeatIndexDisplay.php");

$weatherData = new WeatherData();
$currentConditionsDispaly = new CurrentConditionsDispaly($weatherData);
$forecastDisplay = new ForecastDisplay($weatherData);
$statisticsDisplay = new StatisticsDisplay($weatherData);
$heatIndexDisplay = new HeatIndexDisplay($weatherData);

$weatherData->setMeasurements(80, 65, 30.4);
$weatherData->setMeasurements(82, 70, 29.2);
$weatherData->setMeasurements(78, 90, 29.2);
?>