"use strict";

const apiKey = `92fe4dbc3ab246eccdb0efac7184d933
`;

// Getting the city name form text field
const searchTemperature = () => {
  const textFieldValue = document.getElementById("text-field").value;
  const apiOfCity = `https://api.openweathermap.org/data/2.5/weather?q=${textFieldValue}&appid=${apiKey}&units=metric`;
  fetch(apiOfCity)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnerHtml = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemperature = (info) => {
  console.log(info);
  setInnerHtml("city", info.name);
  setInnerHtml("temp", info.main.temp);
  setInnerHtml("weather", info.weather[0].main);

  // set icon
  const url = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
  const icon = document.getElementById("icon");
  icon.setAttribute("src", url);
};
