const searchInput = document.querySelector("#searchInput")
searchButton = document.querySelector("#searchButton")
weatherIcon = document.querySelector("#weatherIcon")
windSpeed = document.querySelector("#windSpeed")
humidity = document.querySelector(".humidity")
weather = document.querySelector(".weather")
desc = document.querySelector(".desc")
API = "2dd8ad305ee9e66b58e9d310cc285bd6";
// --------------------- Created By InCoder ---------------------
const setWeatherDetails = (data) => {
    // console.log(data);
    desc.innerHTML = data.weather[0].description;
    weather.innerHTML = Math.round(data.main.temp - 273.15) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + "km/h";
    switch (data.weather[0].main) {
        case 'Clouds':
            weatherIcon.src = "img/clouds.gif";
            break;
        case 'Clear':
            weatherIcon.src = "img/clear.gif";
            break;
        case 'Rain':
            weatherIcon.src = "img/rain.gif";
            break;
        case 'Mist':
            weatherIcon.src = "img/mist.gif";
            break;
        case 'Snow':
            weatherIcon.src = "img/snow.gif";
            break;
        case 'Haze':
            weatherIcon.src = "img/haze.gif";
            break;
    }
}

const callAPI = (id) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${id}`)
        .then(response => {
            // indicates whether the response is successful (status code 200-299) or not
            if (!response.ok) {
                alert("Check spelling of City and try again or Something Went Wrong!");
                throw new Error(`Request failed with status ${response.status}`)
            }
            return response.json()
        })
        .then(data => {
            setWeatherDetails(data);
        })
        .catch(error => console.log(error))
}

searchButton.addEventListener("click", (e) => {
    if (searchInput.value == "") {
        alert("Please Enter City Name.");
    } else {
        callAPI(API);
    }
})

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        searchButton.click();
    }
})

searchButton.click();
searchButton.addEventListener("click", (e) => {
    if (searchInput.value == "") {
        alert("Please Enter City Name.");
    } else {
        callAPI(API);
        updateDateTime(); // Add this line to update date and time when weather data is fetched
    }
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        searchButton.click();
        updateDateTime(); // Add this line to update date and time when Enter is pressed
    }
});

// Add this function to update date and time
searchButton.addEventListener("click", (e) => {
    if (searchInput.value == "") {
        alert("Please Enter City Name.");
    } else {
        callAPI(API);
        updateDateTime(); // Add this line to update date and time when weather data is fetched
    }
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        searchButton.click();
        updateDateTime(); // Add this line to update date and time when Enter is pressed
    }
});


searchButton.addEventListener("click", (e) => {
    if (searchInput.value == "") {
        alert("Please Enter City Name.");
    } else {
        callAPI(API);
        updateDateTime(); // Add this line to update date and time when weather data is fetched
    }
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        searchButton.click();
        updateDateTime(); // Add this line to update date and time when Enter is pressed
    }
});

// Add this function to update date and time
function updateDateTime() {
  const currentDate = new Date();
  const dateElement = document.getElementById('date');
  const timeElement = document.getElementById('time');

  dateElement.textContent = currentDate.toDateString();
  timeElement.textContent = currentDate.toLocaleTimeString();
}

// Call the function to initially display the date and time when the page loads
updateDateTime();


  

  

  
  
  
  
  
  

  