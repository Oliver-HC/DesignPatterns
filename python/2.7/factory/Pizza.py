from abc import ABCMeta, abstractmethod

class Pizza:
    __metaclass__ = ABCMeta

    def __init__(self):
        self.name = None

        self.dough = None
        self.sauce = None
        self.veggies = None
        self.cheese = None
        self.pepperoni = None
        self.clam = None

    @abstractmethod
    def prepare(self):
        pass

    def bake(self):
        print "Bake for 25 minutes at 350"

    def cut(self):
        print "Cutting the pizza into diagonal slices"

    def box(self):
        print "Place pizza in official PizzaStore box"

    def setName(self, name):
        self.name = name

    def getName(self):
        return self.name

    def __str__(self):
        result = []
        result.append("---- %s ----\n" %(self.name))
        if self.dough != None:
            result.append(self.dough)
            result.append("\n")
        if self.sauce != None:
            result.append(self.sauce)
            result.append("\n")
        if self.cheese != None:
            result.append(self.cheese)
            result.append("\n")
        if self.veggies != None:
            for veggie in self.veggies:
                result.append(veggie)
                result.append(", ")
            result.pop()
        if self.clam != None:
            result.append(self.clam)
            result.append("\n")
        if self.pepperoni != None:
            result.append(self.pepperoni)
            result.append("\n")
        return "".join(result)
