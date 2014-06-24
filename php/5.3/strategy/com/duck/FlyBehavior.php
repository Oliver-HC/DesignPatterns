<?
namespace strategy;

interface FlyBehavior {
    public function fly();
}

class FlyWithWings implements FlyBehavior {
    public function fly() {
        echo "I believe I can fly\n";
    }
}

class FlyNoWay implements FlyBehavior {
    public function fly() {
        echo "I can't fly\n";
    }
}

class FlyRocketPowered implements FlyBehavior {
    public function fly() {
        echo "I'm flying with a rocket\n";
    }
}
?>
