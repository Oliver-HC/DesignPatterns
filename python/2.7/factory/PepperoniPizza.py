from Pizza import *

class PepperoniPizza(Pizza):
    def __init__(self, ingredientFactory):
        super(PepperoniPizza, self).__init__()
        self.ingredientFactory = ingredientFactory

    def prepare(self):
        print "Preparing %s" %(self.name)
        self.dough = self.ingredientFactory.createDough()
        self.sauce = self.ingredientFactory.createSauce()
        self.cheese = self.ingredientFactory.createCheese()
        self.veggies = self.ingredientFactory.createVeggies()
        self.pepperoni = self.ingredientFactory.createPepperoni()