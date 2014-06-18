<?
include_once("Beverage.php");

abstract class CondimentDecorator extends Beverage {
    public function getDescription(){
        throw new Exception("This method must be overwritten!");
    }
}
?>