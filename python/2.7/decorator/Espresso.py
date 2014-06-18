from Beverage import *

class Espresso(Beverage):
    def __init__(self):
        super(Espresso, self).__init__()
        self.description = "Espresso"

    def cost(self):
        return 1.99