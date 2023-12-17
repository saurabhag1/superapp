import StyleWeather from "./Weather.module.scss";
import { useState, useEffect } from "react";

const fetchData = async () => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?q=india&lang=english&key=325e98aba18b484e9d4111332230910`
  );
  const data = await response.json();
  return data;
};

const Weather = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [weatherImage, setWeatherImage] = useState(null);
  const [celcius, setCelcius] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherData = await fetchData();
        const settingWeather = weatherData.current;
        setWeather(settingWeather.condition.text);
        setWeatherImage(settingWeather.condition.icon);
        setCelcius(settingWeather.temp_c);
        setPressure(settingWeather.pressure_mb);
        setWind(settingWeather.wind_kph);
        setHumidity(settingWeather.humidity);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };

    fetchWeatherData();
  }, []);

  //   timer
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        <div className={`${StyleWeather.dateTime}`}>
          {currentDate.toLocaleString()}
        </div>
        <div className={`${StyleWeather.weather}`}>
          <div className={`${StyleWeather.weatherText1}`}>
            &nbsp;
            <img src={`https:${weatherImage}`} />
            <br />
            &nbsp;&nbsp; {weather}
          </div>
          <span className={`${StyleWeather.dividerLine}`}>&#124;</span>
          <div className={`${StyleWeather.celcius}`}>
            {celcius}
            <span>&deg;C</span>
            <br />
            <span className={`${StyleWeather.pressure}`}>
              <img src="images/pressure.svg" style={{ width: "1vw" }} />
              &nbsp;
              <span className={`${StyleWeather.pressureText}`}>
                {pressure} mbar Pressure
              </span>
            </span>
          </div>
          <span className={`${StyleWeather.dividerLine}`}>&#124;</span>
          <div>
            <br />
            <div className={`${StyleWeather.windHumidity}`}>
              <div>
                <img src="/images/wind.svg" style={{ width: "1vw" }} />
                <span>
                  {" "}
                  {wind} Km/h
                  <br />
                  Wind
                </span>
              </div>
              <br />
              <div>
                <img src="/images/Humidiy.svg" style={{ width: "1vw" }} />
                <span>
                  {" "}
                  {humidity} %
                  <br />
                  Humidiy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
