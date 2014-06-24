from Clams import *

class FrozenClams(Clams):
    __metaclass__ = ABCMeta

    def __str__(self):
        return "Frozen Clams from Chesapeake Bay"