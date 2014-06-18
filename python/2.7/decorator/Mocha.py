from CondimentDecorator import *

class Mocha(CondimentDecorator):
    def __init__(self, beverage):
        self.beverage = beverage

    def getDescription(self):
        return self.beverage.getDescription() + ", Mocha"

    def cost(self):
        return .20 + self.beverage.cost()

