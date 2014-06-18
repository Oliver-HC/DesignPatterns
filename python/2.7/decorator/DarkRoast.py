from Beverage import *

class DarkRoast(Beverage):
    def __init__(self):
        super(DarkRoast, self).__init__()
        self.description = "Dark Roast Coffee"

    def cost(self):
        return .99