<?
include_once("./cheese/Cheese.php");

class MozzarellaCheese implements Cheese {
    public function __toString() {
        return "Shredded Mozzarella";
    }
}
?>