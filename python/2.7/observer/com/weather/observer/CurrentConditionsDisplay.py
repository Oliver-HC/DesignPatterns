from Observer import *
from DisplayElement import *

class CurrentConditionsDisplay(Observer, DisplayElement):
    def __init__(self, weatherData):
        self.temperature = 0.0
        self.humidity = 0.0
        self.weatherData = weatherData
        self.weatherData.registerObserver(self)

    def update(self, temperature, humidity, pressure):
        self.temperature = temperature
        self.humidity = humidity
        self.display()

    def display(self):
        print "Current conditions: %s F degrees and %s humidity" %(self.temperature, self.humidity)