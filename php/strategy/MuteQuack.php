<?
namespace strategy;

class MuteQuack implements QuackBehavior {
    public function quack() {
        echo "... ....";
    }
}
?>