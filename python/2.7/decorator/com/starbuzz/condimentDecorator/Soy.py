from CondimentDecorator import *

class Soy(CondimentDecorator):
    def __init__(self, beverage):
        self.beverage = beverage

    def getDescription(self):
        return self.beverage.getDescription() + ", Soy"

    def cost(self):
        return .15 + self.beverage.cost()