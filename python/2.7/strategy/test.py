# -*- coding:utf-8 -*-
#import ABCMeta to use Abstract Class
from abc import ABCMeta, abstractmethod

"""
FlyBehavior 인터페이스를 통해
FlyWithWigns, FlyNoWay 두 클래스를 만들어낸다
"""
class FlyBehavior:
    """ This class is interface as abstract class"""
    __metaclass__ = ABCMeta

    @abstractmethod
    def fly(self):
        pass

class FlyWithWings(FlyBehavior):
    """
    This class implements FlyBehavior
    It define that fly class
    """
    def fly(self):
        print 'I believe I can fly'

class FlyNoWay(FlyBehavior):
    """
    This class implements FlyBehavior
    It define that don't fly class
    """
    def fly(self):
        print "I can't fly"

"""
QuackBehavior 인터페이스를 통해
Quack, Squeak, MuteQuack 을 만들어 낸다.
"""
class QuackBehavior:
    """ THis class is interface as abstract class"""
    __metaclass__ = ABCMeta

    @abstractmethod
    def quack(self):
        pass

class Quack(QuackBehavior):
    """
    This class implements QuackBehavior
    'Quack! Quack!'
    """
    def quack(self):
        print 'Quack! Quack!'

class Squeak(QuackBehavior):
    """
    This class implements QuackBehavior
    'Squeak! Squeak'
    """
    def quack(self):
        print 'Squeak! Squeak!'

class MuteQuack(QuackBehavior):
    """
    This class implemetns QuackBehavior
    '... ...'
    """
    def quack(self):
        print '... ...'


class Duck(object):
    """docstring for Duck"""

    # fly_behavior과 quack_behavior에 클래스를 전달함으로써
    # 상속이 아닌 구성을 가능하게 한다.
    def __init__(self):
        self.fly_behavior = FlyBehavior
        self.quack_behavior = QuackBehavior

    def swim(self):
        pass

    def display(self):
        pass

    def perform_quack(self):
        self.quack_behavior.quack()

    def perform_fly(self):
        self.fly_behavior.fly()

    def set_fly_behavior(self, fb):
        self.fly_behavior = fb

    def set_quack_behavior(self, qb):
        self.quack_behavior = qb

class MallardDuck(Duck):
    """docstring for MallardDuck"""
    def __init__(self):
        super(MallardDuck, self).__init__()
        self.fly_behavior = FlyWithWings()
        self.quack_behavior = Quack()

    def display(self):
        print "I'm MallardDuck"

class RedheadDuck(Duck):
    """docstring for RedheadDuck"""
    def __init__(self):
        super(RedheadDuck, self).__init__()
        self.fly_behavior = FlyWithWings()
        self.quack_behavior = Quack()

    def display(self):
        print "I'm RedheadDuck "

class RubberDuck(Duck):
    """docstring for RubberDuck"""
    def __init__(self):
        super(RubberDuck, self).__init__()
        self.fly_behavior = FlyNoWay()
        self.quack_behavior = Squeak()

    def display(self):
        print "I'm RubberDuck "

class DecoyDuck(Duck):
    """docstring for DecoyDuck"""
    def __init__(self):
        super(DecoyDuck, self).__init__()
        self.fly_behavior = FlyNoWay()
        self.quack_behavior = MuteQuack()

    def display(self):
        print "I'm DecoDuck "

# mallard test code
mallard = MallardDuck()
mallard.perform_fly()
mallard.perform_quack()

print 'Change'
#Let's change quack behavior of mallard
mallard.set_quack_behavior(MuteQuack())
mallard.perform_quack()
