from PizzaIngredientFactory import *

from ThinCrustDough import *
from MarinaraSauce import *
from ReggianoCheese import *
from Garlic import *
from Onion import *
from Mushroom import *
from RedPepper import *
from SlicedPepperoni import *
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