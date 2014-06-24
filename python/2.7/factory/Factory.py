import sys

sys.path.append("./pizzaStore")
from NYPizzaStore import *
from ChicagoPizzaStore import *

if __name__ == "__main__":
    nyStore = NYPizzaStore()
    chicagoStore = ChicagoPizzaStore()

    pizza = nyStore.orderPizza("cheese")
    print "Ethan ordered a %s\n" %(pizza)

    pizza = chicagoStore.orderPizza("cheese")
    print "Joel ordered a %s\n" %(pizza)

    pizza = nyStore.orderPizza("clam")
    print "Ethan ordered a %s\n" %(pizza)

    pizza = chicagoStore.orderPizza("clam")
    print "Joel ordered a %s\n" %(pizza)

    pizza = nyStore.orderPizza("pepperoni")
    print "Ethan ordered a %s\n" %(pizza)

    pizza = chicagoStore.orderPizza("pepperoni")
    print "Joel ordered a %s\n" %(pizza)

    pizza = nyStore.orderPizza("veggie")
    print "Ethan ordered a %s\n" %(pizza)

    pizza = chicagoStore.orderPizza("veggie")
    print "Joel ordered a %s\n" %(pizza)