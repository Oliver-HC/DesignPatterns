from abc import ABCMeta, abstractmethod

class PizzaIngredientFactory:
    __metaclass__ = ABCMeta

    @abstractmethod
    def createDough(self):
        pass

    def createSauce(self):
        pass

    def createCheese(self):
        pass

    def createVeggies(self):
        pass

    def createPepperoni(self):
        pass

    def createClam(self):
        pass