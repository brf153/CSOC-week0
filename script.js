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