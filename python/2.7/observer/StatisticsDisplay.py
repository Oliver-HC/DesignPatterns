from Observer import *
from DisplayElement import *

class StatisticsDisplay(Observer, DisplayElement):
    def __init__(self, weatherData):
        self.maxTemp = 0.0
        self.minTemp = 200
        self.tempSum = 0.0
        self.numReadings = 0
        self.weatherData = weatherData
        self.weatherData.registerObserver(self)

    def update(self, temp, humidity, pressure):
        self.tempSum += temp
        self.numReadings += 1

        if(temp > self.maxTemp):
            self.maxTemp = temp
        if(temp < self.minTemp):
            self.minTemp = temp

        self.display()

    def display(self):
        print "Avg/Max/Min temperature = %s/%s/%s"%(self.tempSum/self.numReadings, self.maxTemp, self.minTemp)
