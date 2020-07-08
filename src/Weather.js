import React, { useEffect, useState } from "react";

let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "f146799a557e8ab658304c1b30cc3cfd";
let city ="New York, USA";

function Weather() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    let api = `${apiUrl}?q=${city}&appid=${apiKey}&units=imperial`;
    fetch(api).then(response => response.json()).then(data => {
      setWeather(data);
    })
  }, []);

  return (
    <h2>It is currently {weather && weather.main.temp}° F in {city}.</h2>
  );
}

export default Weather;
