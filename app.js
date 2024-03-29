// ========= NINJA API ==========

// let input = prompt("Enter Your City")
// fetch(`https://api.api-ninjas.com/v1/weather?city=${input}`,{
//     headers : { 'X-Api-Key': "sCmBhg6fxrP/LqGVqsQmYw==ejubRWsejN2sDM0v" }
// })
// .then((data)=>data.json())
// .then((data)=>{
//     // console.log(data)
//     document.write(data.temp)
    
// })
// .catch((err)=>{
//     console.log(err)
// })

const API_KEY = 'c0b5128f156302e45955b96cad94ac3a';
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
const getWeather = async(city)  => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    return showWeather(data)

}

const showWeather = (data) =>{
    if(data.cod == "404" ){
       weather.innerHTML =`<h2>City Not Found</h2>`
    }
    
    console.log(data)
   
  weather.innerHTML =  `
  <div>
  <img class="weatherIcon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">
  </div>
 
            <div>
                <h2>${data.main.temp}</h2>
                <h4>${data.weather[0].description}</h4>
               
            </div>
  `
}


form.addEventListener("submit", function(event){
    getWeather(search.value)

    event.preventDefault();
  
})



