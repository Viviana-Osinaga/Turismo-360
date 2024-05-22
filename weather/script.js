
const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".errorMsg").style.color = "#ff0000"
        document.querySelector(".weather").style.display = "none"
        
    } else{
        let data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "./weather/images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "./weather/images/clear.png";
                break;
            case "Drizzle":
                weatherIcon.src = "./weather/images/drizzle.png";
                break;
            case "Rain":
                weatherIcon.src = "./weather/images/rain.png";
                break;
            case "Snow":
                weatherIcon.src = "./weather/images/snow.png";
                break;
            case "Mist":
                weatherIcon.src = "./weather/images/mist.png";
                break;
            default:
                // Handle any other cases or provide a default behavior
                break;
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"

    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keyup", (event) => {
    event.key == "Enter" ? checkWeather (searchBox.value): null; // Ternary Operator

})

