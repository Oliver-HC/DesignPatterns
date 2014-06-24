import sys

from PizzaIngredientFactory import *

sys.path.append("./dough")
from ThickCrustDough import *

sys.path.append("./sauce")
from PlumTomatoSauce import *

sys.path.append("./cheese")
from MozzarellaCheese import *

sys.path.append("./veggies")
from BlackOlives import *
from Spinach import *
from Eggplant import *

sys.path.append("./pepperoni")
from SlicedPepperoni import *

sys.path.append("./clams")
from FrozenClams import *

class ChicagoPizzaIngredientFactory(PizzaIngredientFactory):
    def __init__(self):
        super(ChicagoPizzaIngredientFactory, self).__init__()

    def createDough(self):
        return str(ThickCrustDough())

    def createSauce(self):
        return str(PlumTomatoSauce())

    def createCheese(self):
        return str(MozzarellaCheese())

    def createVeggies(self):
        self.veggies = [str(BlackOlives()), str(Spinach()), str(Eggplant())]
        return self.veggies

    def createPepperoni(self):
        return str(SlicedPepperoni())

    def createClam(self):
        return str(FrozenClams())