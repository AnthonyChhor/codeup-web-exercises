// WEATHER INFORMATION FOR THE 5 DAY FORECAST

function geocodeWeatherForecast(searchInput) {
    let html = "";
    geocode(searchInput, mapboxApi).then(function (results) {
        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${weatherAPI}&units=imperial`).done(function (data) {
            console.log(data);


            let forecastInfo = data.list;

            for (let i = 1; i < 6; i++) {

                html += '<div id="card-' + [i] + '" class="forecast-card card">';
                html += '<div class="date-bg">' + nextFiveDays[i] + '</div>';
                html += "<h6>Location: " + data.city.name + "</h6>";
                html += "<p>Min Temp: " + parseInt(forecastInfo[i].main.temp_min) + "&deg;" + "F" + "</p>";
                html += "<p>Max Temp: " + parseInt(forecastInfo[i].main.temp_max) + "&deg;" + "F" + "</p>";
                html += "<div class='weather-icon'>";
                html += '<img src="https://openweathermap.org/img/w/' + forecastInfo[i].weather[0].icon + '.png"></div>';
                html += "<div class='weather'>";
                html += "<p>" + forecastInfo[i].weather[0].main + "</p></div>";
                html += "</div>";

            }

            $("#weather-card").html(html);
            // getDate(forecastInfo[i].dt)

        })
    })
}

// FUNCTION FOR GETTING THE 5-DAY FORECAST

geocodeWeatherForecast("Dallas, TX")
$("#myBtn").click(function (e) {
    e.preventDefault();
    geocodeWeatherForecast($("#searchInput").val());
})

let startDate = new Date()
let nextFiveDays = getNextFiveDays(startDate)

function getNextFiveDays(startDate) {
    const dates = [];
    for (let i = 0; i < 6; i++) {
        const nextDate = new Date(startDate);
        nextDate.setDate(startDate.getDate() + i);
        const formattedDate = getDate(nextDate);
        dates.push(formattedDate);
    }
    return dates;
}

function getDate(date) {


    return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
    });
}

//CURRENT WEATHER CARD

function geoCodeCurrentWeather(searchString) {
    let htmlCurrent = "";
    geocode(searchString, mapboxApi).then(function (result) {
        console.log(result[0]);
        console.log(result[1]);
        $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${result[1]}&lon=${result[0]}&appid=${weatherAPI}&units=imperial`).done(function (currentData) {
            console.log(currentData);
            htmlCurrent += '<div class="date-bg">' + nextFiveDays[0] + '</div>';
            htmlCurrent += "<h6>Location: " + currentData.name + "</h6>";
            htmlCurrent += "<p>Current Temperature: " + parseInt(currentData.main.temp) + "&deg;" + "F</p>";
            htmlCurrent += "<div class='current-weather-icon'>"
            htmlCurrent += '<img src="https://openweathermap.org/img/w/' + currentData.weather[0].icon + '.png"></div>';
            htmlCurrent += "<p class='solo-weather'>Weather: " + currentData.weather[0].description + "</p>";
            $("#weather-forecast-small").html(htmlCurrent);


        })

    })
};

// CURRENT FORECAST EXTRA DETAILS

geoCodeCurrentWeather("Dallas, TX")
$("#myBtn").click(function (e) {
    e.preventDefault();
    geoCodeCurrentWeather($("#searchInput").val());
})

function geoCodeCurrentWeatherDetails(searchString) {
    let htmlDetail = "";
    geocode(searchString, mapboxApi).then(function (result) {
        console.log(result[0]);
        console.log(result[1]);


        // console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${result[1]}&lon=${result[0]}&appid=${weatherAPI}&units=imperial`);
        $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${result[1]}&lon=${result[0]}&appid=${weatherAPI}&units=imperial`).done(function (currentData) {
            console.log(currentData);
            htmlDetail += "<div class='text-center text-white'><h2>Today's Weather Forecast:  </h2></div>";
            htmlDetail += "<div class='d-flex col-12'>";
            htmlDetail += "<div class='col-3 card current-weather-details'><p>Current average wind speed: " + parseInt(currentData.wind.speed) + " knots</p></div>";
            htmlDetail += "<div class='col-3 card current-weather-details'><p>Current Temperature: " + parseInt(currentData.main.temp) + "&deg;" + "F</p>\n<p>Feels like: " + parseInt(currentData.main.feels_like) + "&deg;" + "F</p></div>";
            htmlDetail += "<div class='col-3 card current-weather-details'><p>Weather: " + currentData.weather[0].main + "</p></div>";
            htmlDetail += "<div class='col-3 card current-weather-details'><p>Current humidity: " + parseInt(currentData.main.humidity) + "</p></div>";
            htmlDetail += "</div>";
            $("#weather-forecast-details").html(htmlDetail);


        })

    })
};
geoCodeCurrentWeatherDetails("Dallas, TX")
$("#myBtn").click(function (e) {
    e.preventDefault();
    geoCodeCurrentWeatherDetails($("#searchInput").val());
})

// MARKER LOCATION AND MAPBOX

let personalLocation = [-96.7968, 32.7762];

mapboxgl.accessToken = mapboxApi;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    zoom: 9, // starting zoom
    center: personalLocation, // [lng, lat]
});

// MARKER ON DRAG END

geocode("Dallas, TX", mapboxgl.accessToken).then(function (result) {
    map.setCenter(result.center);
    map.setZoom(10);


    let myMarker = new mapboxgl.Marker({draggable: true})
        .setLngLat([-96.7968, 32.7762])
        .addTo(map);


    function onDragEnd() {
        let dragLngLat = myMarker.getLngLat();
        personalLocation = [dragLngLat.lng, dragLngLat.lat];
    }

    myMarker.on("dragend", onDragEnd);
    map.on("click", (e) => {
        let dragLngLat = e.lngLat;
        personalLocation = [dragLngLat.lng, dragLngLat.lat];
        myMarker.setLngLat(personalLocation);
    });
})







