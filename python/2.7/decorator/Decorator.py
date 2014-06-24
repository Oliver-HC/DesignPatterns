import sys

sys.path.append("./beverage")
from Beverage import *
from Espresso import *
from HouseBlend import *
from DarkRoast import *

sys.path.append("./condimentDecorator")
from Mocha import *
from Soy import *
from Whip import *

if __name__ == "__main__":
    beverage = Espresso()
    print beverage.getDescription(), " $%s" %(beverage.cost())

    beverage2 = DarkRoast()
    beverage2 = Mocha(beverage2)
    beverage2 = Mocha(beverage2)
    beverage2 = Whip(beverage2)
    print beverage2.getDescription(), " $%s" %(beverage2.cost())

    beverage3 = HouseBlend()
    beverage3 = Soy(beverage3)
    beverage3 = Mocha(beverage3)
    beverage3 = Whip(beverage3)
    print beverage3.getDescription(), " $%s" %(beverage3.cost())

