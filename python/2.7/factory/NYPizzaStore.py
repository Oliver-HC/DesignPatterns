from PizzaStore import *

from NYPizzaIngredientFactory import *

from CheesePizza import *
from VeggiePizza import *
from ClamPizza import *
from PepperoniPizza import *

class NYPizzaStore(PizzaStore):
    def createPizza(self, item):
        pizza = None
        ingredientFactory = NYPizzaIngredientFactory()

        if item == "cheese":
            pizza = CheesePizza(ingredientFactory)
            pizza.setName("New York Style Cheese Pizza")
        elif item == "veggie":
            pizza = VeggiePizza(ingredientFactory)
            pizza.setName("New York Style Veggie Pizza")
        elif item == "clam":
            pizza = ClamPizza(ingredientFactory)
            pizza.setName("New York Style Clam Pizza")
        elif item == "pepperoni":
            pizza = PepperoniPizza(ingredientFactory)
            pizza.setName("New York Style Pepperoni Pizza")
        return pizza