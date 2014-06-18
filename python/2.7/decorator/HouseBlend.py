from Beverage import *

class HouseBlend(Beverage):
    def __init__(self):
        super(HouseBlend, self).__init__()
        self.description = "House Blend Coffee"

    def cost(self):
        return .89