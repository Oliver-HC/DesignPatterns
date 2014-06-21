from Pizza import *

class ClamPizza(Pizza):
    def __init__(self, ingredientFactory):
        super(ClamPizza, self).__init__()
        self.ingredientFactory = ingredientFactory

    def prepare(self):
        print "Preparing %s" %(self.name)
        self.dough = self.ingredientFactory.createDough()
        self.sauce = self.ingredientFactory.createSauce()
        self.cheese = self.ingredientFactory.createCheese()
        self.clam = self.ingredientFactory.createClam()