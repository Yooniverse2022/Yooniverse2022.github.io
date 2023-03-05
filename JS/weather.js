const MY_KEY = "8c39acd715be097ea918bedaa742950c"

function onGeoOk(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${MY_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather h3:first-child");
        const city = document.querySelector("#weather h3:last-child")
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        city.innerText = `${data.name} in ${data.sys.country} `;
    })
}


navigator.geolocation.getCurrentPosition(onGeoOk);