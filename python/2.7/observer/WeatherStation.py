from WeatherData import *

from CurrentConditionsDisplay import *
from StatisticsDisplay import *
from ForecastDisplay import *
from HeatIndexDisplay import *

weatherData = WeatherData()
currentConditionsDisplay = CurrentConditionsDisplay(weatherData)
statisticsDisplay = StatisticsDisplay(weatherData)
forecastDisplay = ForecastDisplay(weatherData)
HeatIndexDisplay = HeatIndexDisplay(weatherData)

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);