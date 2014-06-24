from abc import ABCMeta, abstractmethod

class Subject:
    __metaclass__ = ABCMeta

    @abstractmethod
    def registerObserver(self):
        pass

    @abstractmethod
    def removeObserver(self):
        pass

    @abstractmethod
    def notifyObservers(self):
        pass