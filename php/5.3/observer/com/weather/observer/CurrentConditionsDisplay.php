<?
include_once("./subject/WeatherData.php");
include_once("./observer/Observer.php");
include_once("./observer/DisplayElement.php");

class CurrentConditionsDispaly implements Observer, DisplayElement {
    private $temperature;
    private $humidity;
    private $weatherData;

    public function __construct(WeatherData $weatherData) {
        $this->weatherData = $weatherData;
        $this->weatherData->registerObserver($this);
    }

    public function update($temperature, $humidity, $pressure) {
        $this->temperature = $temperature;
        $this->humidity = $humidity;
        self::display();
    }

    public function display() {
        echo ("current conditions " . $this->temperature . " degrees and " . $this->humidity . " humidity\n");
    }
}
?>