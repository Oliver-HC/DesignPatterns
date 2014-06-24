<?
include_once("./veggies/Veggies.php");

class Spinach implements Veggies {
    public function __toString() {
        return "Spinach";
    }
}
?>