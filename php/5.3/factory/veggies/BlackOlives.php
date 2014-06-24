<?
include_once("./veggies/Veggies.php");

class BlackOlives implements Veggies {
    public function __toString() {
        return "Black Olives";
    }
}
?>