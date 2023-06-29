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
const weatherinfo = document.getElementById("weather-info")
const form = document.getElementById("weather-input")

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var inputField = document.getElementById("inputField");
  var inputValue = inputField.value.trim();

  if (inputValue !== "") {
    var url = "backend-url?param=" + encodeURIComponent(inputValue);
    window.location.href = url;
  }
});

weatherbox.addEventListener("mouseover",(e)=>{
  e.preventDefault()
  document.getElementById("weather-input").style.display= "block"
})

weatherbox.addEventListener("mouseout",(e)=>{
  e.preventDefault()
  document.getElementById("weather-input").style.display = "none"
})