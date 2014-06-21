from Cheese import *

class MozzarellaCheese(Cheese):
    def __init__(self):
        super(MozzarellaCheese, self).__init__()

    def __str__(self):
        return "Shredded Mozzarella"