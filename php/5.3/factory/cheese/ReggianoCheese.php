<?
include_once("./cheese/Cheese.php");

class ReggianoCheese implements Cheese {
    public function __toString() {
        return "Reggiano Cheese";
    }
}
?>