<?
include_once("./pepperoni/Pepperoni.php");

class SlicedPepperoni implements Pepperoni {
    public function __toString() {
        return "Sliced Pepperoni";
    }
}
?>