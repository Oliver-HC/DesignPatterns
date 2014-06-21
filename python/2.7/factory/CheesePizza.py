from Pizza import *

class CheesePizza(Pizza):
    def __init__(self, ingredientFactory):
        super(CheesePizza, self).__init__()
        self.ingredientFactory = ingredientFactory

    def prepare(self):
        print "Preparing %s" %(self.name)
        self.dough = self.ingredientFactory.createDough()
        self.sauce = self.ingredientFactory.createSauce()
        self.cheese = self.ingredientFactory.createCheese()