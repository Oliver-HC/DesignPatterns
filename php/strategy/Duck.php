<?
namespace strategy;

abstract class Duck {
    protected $flyBehavior;
    protected $quackBehavior;

    public function __construct() {
    }

    public abstract function display();

    public function performFly() {
        $this->flyBehavior->fly();
    }

    public function performQuack() {
        $this->quackBehavior->quack();
    }

    public function setFlyBehavior(FlyBehavior $fb) {
        $this->flyBehavior = $fb;
    }

    public function setQuackBehavior(QuackBehavior $qb) {
        $this->quackBehavior = $qb;
    }

    public function swim() {
        echo "All ducks float, even decoys!";
    }
}

class MallardDuck extends Duck {
    public function __construct() {
        parent::__construct();
        $this->flyBehavior = new FlyWithWings();
        $this->quackBehavior = new Quack();
    }

    public function display() {
        echo "I'm a real Mallard duck";
    }
}

class ModelDuck extends Duck {
    public function __construct() {
        parent::__construct();
        $this->flyBehavior = new FlyNoWay();
        $this->quackBehavior = new Quack();
    }

    public function display() {
        echo "I'm a model duck";
    }
}
?>