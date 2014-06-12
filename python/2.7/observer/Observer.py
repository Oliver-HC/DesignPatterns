from abc import ABCMeta, abstractmethod

class Observer:
    __metaclass__ = ABCMeta

    @abstractmethod
    def update(self, temp, humidity, pressure):
        pass