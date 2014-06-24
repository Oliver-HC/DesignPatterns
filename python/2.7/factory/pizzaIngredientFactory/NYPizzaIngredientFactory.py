import sys

from PizzaIngredientFactory import *

sys.path.append("./dough")
from ThinCrustDough import *

sys.path.append("./sauce")
from MarinaraSauce import *

sys.path.append("./cheese")
from ReggianoCheese import *

sys.path.append("./veggies")
from Garlic import *
from Onion import *
from Mushroom import *
from RedPepper import *

sys.path.append("./pepperoni")
from SlicedPepperoni import *

sys.path.append("./clams")
from FreshClams import *

class NYPizzaIngredientFactory(PizzaIngredientFactory):
    def __init__(self):
        super(NYPizzaIngredientFactory, self).__init__()

    def createDough(self):
        return str(ThinCrustDough())

    def createSauce(self):
        return str(MarinaraSauce())

    def createCheese(self):
        return str(ReggianoCheese())

    def createVeggies(self):
        self.veggies = [str(Garlic()), str(Onion()), str(Mushroom()), str(RedPepper())]
        return self.veggies

    def createPepperoni(self):
        return str(SlicedPepperoni())

    def createClam(self):
        return str(FreshClams())