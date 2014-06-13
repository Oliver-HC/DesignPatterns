<?
include_once("WeatherData.php");
include_once("Observer.php");
include_once("DisplayElement.php");

class StatisticsDisplay implements Observer, DisplayElement {
    private $maxTemp;
    private $minTemp;
    private $tempSum;
    private $numReadings;
    private $weatherData;

    public function __construct(WeatherData $weatherData) {
        $this->maxTemp = 0.0;
        $this->minTemp = 200;
        $this->tempSum = 0.0;
        $this->numReadings = 0;
        $this->weatherData = $weatherData;
        $this->weatherData->registerObserver($this);
    }

    public function update($temp, $humidity, $pressure) {
        $this->tempSum += $temp;
        $this->numReadings += 1;

        if($temp > $this->maxTemp) {
            $this->maxTemp = $temp;
        }
        if($temp < $this->minTemp) {
            $this->minTemp = $temp;
        }

        $this->display();
    }

    public function display() {
        echo "Avg/Max/Min temperature = $this->tempSum/$this->maxTemp/$this->minTemp";
    }
}
?>