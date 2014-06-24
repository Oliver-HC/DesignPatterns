from Observer import *
from DisplayElement import *

class ForecastDisplay(Observer, DisplayElement):
    def __init__(self, weatherData):
        self.currentPressure = 29.92
        self.lastPressure = 0.0
        self.weatherData = weatherData
        self.weatherData.registerObserver(self)

    def update(self, temp, humidity, pressure):
        self.lastPressure = self.currentPressure
        self.currentPressure = pressure;
        self.display()

    def display(self):
        print "Forecast: "
        if(self.currentPressure > self.lastPressure):
            print "Improving weather on the way!"
        elif(self.currentPressure == self.lastPressure):
            print "More of the same"
        elif(self.currentPressure < self.lastPressure):
            print "Watch out for cooler, rainy weather"