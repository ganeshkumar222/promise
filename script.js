const container = document.getElementById("container1")
const url = "https://restcountries.com/v3.1/all"
let result = fetch(url)
result.then((data)=> data.json()).then((ele)=>{
    for(let i =0; i<ele.length;i++){
       const div = document.createElement("div")
       div.className="col-lg-4"
    //    div.className="col-sm-12"
       div.innerHTML = `<div class="card text-center">
       <div class="card-header">
       ${ele[i].name.common}
     </div>
     
       <div class="card-body">
       <img src=${ele[i].flags.png} class="img-fluid" alt="...">
         <p class="card-text">Capital: ${ele[i].capital}</p>
         <p class="card-text">Region: ${ele[i].region}</p>
         <p class="card-text">Country Code:${ele[i].cca2}</p>
         <button class="btn btn-primary" id=${ele[i].name.common} onclick={handleClick(id)}>click for weather</button>
       </div>
     </div>`
     container.append(div)
    }
}).catch((error) => {console.log(error)})
 

let handleClick = (countryname) => {
    let apiKey = "cadb839a9266c98e91e28494f6c574ff"
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryname}&appid=${apiKey}`;
    let weather =  fetch(weatherUrl)
    weather.then((data)=>data.json()).then((res)=>{
        // console.log(res.name)
        document.getElementById(countryname).innerHTML=`${res.main.temp_min} min and ${res.main.temp_max} max`
        setTimeout(()=>{document.getElementById(countryname).innerHTML="click for weather"},10000)
    })

 }