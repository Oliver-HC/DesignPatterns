from Beverage import *

class Decaf(Beverage):
    def __init__(self):
        super(Decaf, self).__init__()
        description = "Decaf Coffee"

    def cost(self):
        return 1.05