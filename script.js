$(document).ready(function () {
    $("#searchInput").on("keyup", function (e) {
        var cityname = e.target.value;
        const APIKey = "da220dd1dd0fbfd2c81f0c49c5aeaba6";
        //make a request to the server
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`,


        }).done(function (weatherdata) {
            console.log(weatherdata);
            $("#profile").html(`
            <div class="hydrabad">
        <div class="row">
        <div class="card" style="width: 18rem;">
     <img class="card-img-top" src="https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
     <div class="card-body">
     <h5 class="card-title">${weatherdata.weather[0].description}</h5>
    <p class="card-text">The temperature at ${cityname} is=${weatherdata.main.temp} &#8451; and it feel like  it is ${weatherdata.main.feels_like} &#8451;</p>
    <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">Learn more about this  place</a>
    </div>
     </div>
        
        </div>
        </div>`);
        });
    });
})