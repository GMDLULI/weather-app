let apiKey = "1289cd044582d3271e980de23db4457d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let day = date.getDay();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${days[day]} ${hours}:${minutes}`;
}
function displayWeather(response) {
  console.log(response.data);

  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let temparatureElement = document.querySelector("#temp");
  let dateElement = document.querySelector("#date");

  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  temparatureElement.innerHTML = Math.round(response.data.main.temp);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}
axios.get(apiUrl).then(displayWeather);
