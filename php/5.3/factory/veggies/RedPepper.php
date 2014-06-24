<?
include_once("./veggies/Veggies.php");

class RedPepper implements Veggies {
    public function __toString() {
        return "Red Pepper";
    }
}
?>