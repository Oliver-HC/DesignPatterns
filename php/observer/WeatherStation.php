<?
include_once("WeatherData.php");

include_once("CurrentConditionsDisplay.php");
include_once("StatisticsDisplay.php");
include_once("ForecastDisplay.php");
include_once("HeatIndexDisplay.php");

$weatherData = new WeatherData();
$currentConditionsDispaly = new CurrentConditionsDispaly($weatherData);
$forecastDisplay = new ForecastDisplay($weatherData);
$statisticsDisplay = new StatisticsDisplay($weatherData);
$heatIndexDisplay = new HeatIndexDisplay($weatherData);

$weatherData->setMeasurements(80, 65, 30.4);
$weatherData->setMeasurements(82, 70, 29.2);
$weatherData->setMeasurements(78, 90, 29.2);
?>