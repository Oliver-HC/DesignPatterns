from Subject import *

class WeatherData(Subject):
    def __init__(self):
        super(WeatherData, self).__init__()
        self.observers = []
        self.temperature = 0
        self.humidity = 0
        self.pressure = 0

    def registerObserver(self, o):
        self.observers.append(o)

    def removeObserver(self, o):
        i = observers.index(o)
        if(i >= 0):
            self.observers.remove(i);

    def notifyObservers(self):
        for observer in self.observers:
            observer.update(self.temperature, self.humidity, self.pressure)

    def measurementsChanged(self):
        self.notifyObservers()

    def setMeasurements(self, temperature, humidity, pressure):
        self.temperature = temperature
        self.humidity = humidity
        self.pressure = pressure
        self.measurementsChanged()

    def getTemperature(self):
        return self.temperature

    def getHumidity(self):
        return self.humidity

    def getPressure(self):
        return self.pressure