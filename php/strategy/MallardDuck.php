<?
namespace strategy;

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
?>