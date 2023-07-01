// onload func
window.onload = function(){
  let lat=25.3
  let long=83
  fetchData(lat,long)
  getAuth()
}

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

});

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

weatherbox.addEventListener("mouseover",(e)=>{
  e.preventDefault()
  document.getElementById("weather-input").style.display= "block"
})

weatherbox.addEventListener("mouseout",(e)=>{
  e.preventDefault()
  document.getElementById("weather-input").style.display = "none"
})

// song api

// API Key: 0be90c65e43fd06155c0d012cd8b0c0c

// Shared Secret: 7768954ee663b6b9e149b7b911108a48

const music_form = document.getElementById("music-input")

music_form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var inputField = document.getElementById("music-inputField");
  var inputValue = inputField.value.trim();
  console.log(inputValue)

  const options={
    method: 'GET',
    contentType: 'application/json',
  }

  fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${inputValue}&api_key=0be90c65e43fd06155c0d012cd8b0c0c&format=json`,options).then((e)=>e.text()).then((e)=>{
    console.log(JSON.parse(e).results.trackmatches.track[0].url)
    window.location.href = JSON.parse(e).results.trackmatches.track[0].url
  })

});

function getAuth(){
  const auth_key = "0be90c65e43fd06155c0d012cd8b0c0c"
  const options = {
    method: 'GET', // You can use 'POST', 'PUT', 'DELETE', etc. if needed
    headers: {
      'Origin': 'http://localhost:5500',
    },
    mode: 'cors', // No comma after 'cors'
  }
  fetch(`http://ws.audioscrobbler.com/2.0/?method=auth.gettoken&api_key=${auth_key}&format=json`)
  .then((e)=>e.text()).then((e)=>{
    console.log(JSON.parse(e))
    const token = JSON.parse(e).token
    
  })
}
// window.location.href= `http://www.last.fm/api/auth/?api_key=${auth_key}&token=${token}`
// aKp-BsF0N2g8LiInxUBC7-70gjuRPVf_
