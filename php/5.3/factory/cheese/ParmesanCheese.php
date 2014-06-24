<?
include_once("./cheese/Cheese.php");

class ParmesanCheese implements Cheese {
    public function __toString() {
        return "Shredded Parmesan";
    }
}
?>