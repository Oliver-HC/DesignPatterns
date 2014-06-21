from abc import ABCMeta, abstractmethod

class PizzaStore:
    __metaclass__ = ABCMeta

    @abstractmethod
    def createPizza(item):
        pass

    def orderPizza(self, type):
        self.pizza = self.createPizza(type)
        print "--- Making a %s ---" %(self.pizza.getName())
        self.pizza.prepare()
        self.pizza.bake()
        self.pizza.cut()
        self.pizza.box()
        return self.pizza