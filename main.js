let cityName = document.querySelector('#city-name')
let form = document.querySelector('form')
const htmlPlacer = document.querySelector('#html-placer')

form.addEventListener("submit", function(e){
    e.preventDefault()

    async function resource(){
      const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=473a9e63080babde5629d37b51b810c0`);
      const data = await response.json();

    const html = `<h1 id="name-h1">${data.name}, ${data.sys.country}</h1>
    <h3 class="info">${data.weather[0].main}</h3><br>
    <div class="img"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></div><br>
    <div class="temp">${(data.main.temp-273.15).toFixed(2)}°C</div><br>
    <div class="min-max">
        <div class="min">Min: ${(data.main.temp_min-273.15).toFixed(2)}°C |&nbsp</div> 
        <div class="max">Max: ${(data.main.temp_max-273.15).toFixed(2)}°C</div><br>
    </div>`

    htmlPlacer.innerHTML = html
  }
  resource()
  });
