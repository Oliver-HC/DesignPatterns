from CondimentDecorator import *

class Whip(CondimentDecorator):
    def __init__(self, beverage):
        self.beverage = beverage

    def getDescription(self):
        return self.beverage.getDescription() + ", Whip"

    def cost(self):
        return .10 + self.beverage.cost()