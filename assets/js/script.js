//global variables
var mainElement = document.querySelector("#content")
var cityName = document.querySelector("#city-input")
var sumbitElement = document.querySelector("#submit-button")
var locationArray = [];
var parkLocations = []

//function to get a random numer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//api call to get lon/lat using the users inputed city
function getLocation(event) {
  var citySearch = cityName.value
  var apiKey = '15a0cfa8b9ac3c7368330806d461355d'
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=imperial`
  
  fetch(requestUrl)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      locationArray.push(new Location(data.coord.lat,data.coord.lon))
      trailApi()
  });
}

//creates location object to store lat/lon
function Location(lat, lon) {
  this.lat = lat;
  this.lon = lon;
}

//api call to get trail data based off lat/lon
async function trailApi(event) {
    fetch(`https://trailapi-trailapi.p.rapidapi.com/?q-activities_activity_type_name_eq=hiking&lon=${locationArray[0].lon}&limit=25&lat=${locationArray[0].lat}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "0b51268387msh50321ee7c231960p14fcabjsn22a73e77760d",
        "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
      }
    })
    .then(function (response) {
      return response.json();
    })
    .then(response => {
      parkLocations = []
      for (let i = 0; i < response.places.length; i++) {
        if(response.places[i].description !== null) {
          parkLocations.push({name: response.places[i].name, description: response.places[i].description, lat: response.places[i].lat, lon: response.places[i].lon })
        }
      }
      render()
    })
    
    
    .catch(err => {
      console.error(err);
    });
    
    
  }
  
  //event listener for the submit button, starts the api call process
  sumbitElement.addEventListener("click", getLocation)
  

  //function to render the information to the page. Creates an event listener for the find another park button
  function render() {
  console.log(parkLocations)
  mainElement.innerHTML = ''
  var randomNumber = getRandomInt(parkLocations.length)
  var div = document.createElement("div")
  div.setAttribute(`class`,`card`) 
  div.className += ' card cell small-4 small-offset-4 large-4 large-offset-4'
  div.style.width = '33%'
  var titleDiv = document.createElement("div")
  titleDiv.setAttribute(`class`,`card-divider`)
  div.appendChild(titleDiv)
  var title = document.createElement("h3")
  title.setAttribute(`class`,`cell`)
  var button = document.createElement("button")
  button.textContent = 'Find another park'
  div.appendChild(button)
  var description = document.createElement("p")
  title.textContent = parkLocations[randomNumber].name
  description.textContent = parkLocations[randomNumber].description
  mainElement.appendChild(div)
  titleDiv.appendChild(title)
  var mapDiv = document.createElement("div")
  mapDiv.setAttribute(`id`,`map`)
  mapDiv.setAttribute(`class`,`mapDiv`)
  mapDiv.style.height = "300px"
  mapDiv.style.width = '600px'
  div.appendChild(mapDiv)
  var desDiv = document.createElement("div")
  desDiv.setAttribute(`class`,`card-section`)
  div.appendChild(desDiv)
  desDiv.appendChild(description)
  
  var map = L.map(`map`).setView([parkLocations[randomNumber].lat, parkLocations[randomNumber].lon], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([parkLocations[randomNumber].lat, parkLocations[randomNumber].lon]).addTo(map)

  button.addEventListener("click", render)
}