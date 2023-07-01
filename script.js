// chess api
const chess = document.getElementById("chess")

chess.addEventListener("click",(e)=>{
  e.preventDefault()
fetch("https://api.chess.com/pub/puzzle/random").then((e)=>{
  // window.location.href=e.url.url  
return e.text()
}).then((e)=>{
  console.log(JSON.parse(e).url)
  window.location.href= JSON.parse(e).url
})
.catch((err)=>console.log(err))
 
})

// weather api
// api link https://weatherapi-com.p.rapidapi.com/current.json?q=25.3%2C83
const weather = document.getElementById("weather")
const weatherbox = document.getElementById("weather-box")
const weatherinfoloc = document.getElementById("weather-info-loc")
const weatherinfotemp = document.getElementById("weather-info-temp")
const form = document.getElementById("weather-input")

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var inputField = document.getElementById("inputField");
  var inputValue = inputField.value.trim();
  console.log(inputValue)

  const options={
    method: 'GET',
    headers: { 'X-Api-Key': 'cDGXjpdViLH7pPMSq4qFmQ==TylhWViHqFmPapLK'},
    contentType: 'application/json',
  }

    fetch(`https://api.api-ninjas.com/v1/geocoding?city=${inputValue}`,options)
    .then((e)=> e.text())
    .then((e)=>{
      console.log(JSON.parse(e)[0].latitude)
      let lat = JSON.parse(e)[0].latitude
      let long = JSON.parse(e)[0].longitude
      fetchData(lat,long)
    })

    // [{"name": "Delhi", "latitude":(31 ..40) 28.6517178, "longitude": (59...65)...77.2219388, "country": "IN", "state": "Delhi"}, {"name": "Delhi", "latitude": 42.4297057, "longitude": -91.3309112, "country": "US", "state": "Iowa"}, {"name": "Delhi", "latitude": 44.5991256, "longitude": -95.211113, "country": "US", "state": "Minnesota"}, {"name": "Village of Delhi", "latitude": 42.2781401, "longitude": -74.9159946, "country": "US", "state": "New York"}, {"name": "Town of Delhi", "latitude": 42.2781401, "longitude": -74.9159946, "country": "US", "state": "New York"}]

  // if (inputValue !== "") {
  //   var url = "backend-url?param=" + encodeURIComponent(inputValue);
  //   window.location.href = url;
  // }
});

window.onload = function(){
  let lat=25.3
  let long=83
  fetchData(lat,long)
}

function fetchData(lat,long) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '764c1df6f9mshf424ba52802f9eap11a074jsnf75335ff7127',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${lat}%2C${long}`,options)
  .then((res)=> {return res.text()}).then((e)=>{
    console.log(JSON.parse(e).location.name)
    weatherinfoloc.value = `location: ${JSON.parse(e).location.name}`
    weatherinfotemp.value=  `temp: ${JSON.parse(e).current.temp_c}`
    weather.src= `${JSON.parse(e).current.condition.icon}`
  })
}


// cDGXjpdViLH7pPMSq4qFmQ==TylhWViHqFmPapLK

// {"location":{"name":"Varanasi","region":"Uttar Pradesh","country":"India","lat":25.3,"lon":83.0,"tz_id":"Asia/Kolkata","localtime_epoch":1688179631,"localtime":"2023-07-01 8:17"},"current":{"last_updated_epoch":1688179500,"last_updated":"2023-07-01 08:15","temp_c":32.6,"temp_f":90.7,"is_day":1,"condition":{"text":"Patchy rain possible","icon":"//cdn.weatherapi.com/weather/64x64/day/176.png","code":1063},"wind_mph":11.2,"wind_kph":18.0,"wind_degree":235,"wind_dir":"SW","pressure_mb":1002.0,"pressure_in":29.59,"precip_mm":0.1,"precip_in":0.0,"humidity":58,"cloud":85,"feelslike_c":38.1,"feelslike_f":100.6,"vis_km":10.0,"vis_miles":6.0,"uv":7.0,"gust_mph":13.0,"gust_kph":20.9}}

weatherbox.addEventListener("mouseover",(e)=>{
  e.preventDefault()
  document.getElementById("weather-input").style.display= "block"
})

weatherbox.addEventListener("mouseout",(e)=>{
  e.preventDefault()
  document.getElementById("weather-input").style.display = "none"
})