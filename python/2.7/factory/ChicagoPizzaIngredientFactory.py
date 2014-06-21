from PizzaIngredientFactory import *

from ThickCrustDough import *
from PlumTomatoSauce import *
from MozzarellaCheese import *
from BlackOlives import *
from Spinach import *
from Eggplant import *
from SlicedPepperoni import *
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