from abc import ABCMeta, abstractmethod

class Beverage:
    __metaclass__ = ABCMeta

    def __init__(self):
        self.description = "Unknown Beverage";

    def getDescription(self):
        return self.description

    @abstractmethod
    def cost(self):
        pass