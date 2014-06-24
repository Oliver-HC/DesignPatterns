<?
include_once("./veggies/Veggies.php");

class Mushroom implements Veggies {
    public function __toString() {
        return "Mushrooms";
    }
}
?>