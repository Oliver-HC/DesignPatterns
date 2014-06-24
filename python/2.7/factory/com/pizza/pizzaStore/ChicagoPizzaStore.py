import sys

from PizzaStore import *

sys.path.append("./pizzaIngredientFactory")
from ChicagoPizzaIngredientFactory import *

sys.path.append("./pizza")
from CheesePizza import *
from VeggiePizza import *
from ClamPizza import *
from PepperoniPizza import *

class ChicagoPizzaStore(PizzaStore):
    def createPizza(self, item):
        pizza = None
        ingredientFactory = ChicagoPizzaIngredientFactory()

        if item == "cheese":
            pizza = CheesePizza(ingredientFactory)
            pizza.setName("Chicago Style Cheese Pizza")
        elif item == "veggie":
            pizza = VeggiePizza(ingredientFactory)
            pizza.setName("Chicago Style Veggie Pizza")
        elif item == "clam":
            pizza = ClamPizza(ingredientFactory)
            pizza.setName("Chicago Style Clam Pizza")
        elif item == "pepperoni":
            pizza = PepperoniPizza(ingredientFactory)
            pizza.setName("Chicago Style Pepperoni Pizza")
        return pizza