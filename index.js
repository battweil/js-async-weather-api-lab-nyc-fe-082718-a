const API_KEY = "https://api.openweathermap.org/data/2.5/weather"

function handleFormSubmit(event) {
  const cleanCityInput = (city) => city.split(' ').join('+')
 const convertKelvinToFahrenheit = (tempInKelvin) => ((tempInKelvin - 273.15) * 9 / 5 + 32)
 const handleFormSubmit = (event) => {
  event.preventDefault()
  
  const cityInput = document.querySelector('.city').value
  const city = cleanCityInput(cityInput)
  
  fetchCurrentWeather(city)
    .then((response) => response.json())
    .then((json) => displayCurrentWeather(json))
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city

  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?'
  const url = `${baseUrl}q=${city}&APPID=${API_KEY}`
  
  return fetch(url)
  
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  console.log(json)
  const tempInKelvin = json.main.temp
  const temp = convertKelvinToFahrenheit(temp)
  console.log(temp)
}


function fetchFiveDayForecast(city) {
   //fetch five day forecast data based on city
 }
 
 function displayFiveDayForecast(json) {
   //render five day forecast data to the DOM using provided IDs and json from API
 }
 
 function createChart(json) {
   //Bonus: render temperature chart using five day forecast data and ChartJS
}
 document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.querySelector('.submit-button').addEventListener('click', handleFormSubmit)
})