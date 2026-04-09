
async function getData() {


    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=43.0481&longitude=-76.1474&current=precipitation,temperature_2m,cloud_cover&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch", requestOptions);

        const result = await response.text();

        const resultJSON = await JSON.parse(result);

        console.log("Full result is: " + result)

        console.log(resultJSON)

        console.log("Temperature is: " + resultJSON.current.temperature_2m)

        console.log("Precipitation is: " + resultJSON.current.precipitation)

        console.log("Cloud cover is: " + resultJSON.current.cloud_cover)

        updateWeather(resultJSON)

    } catch (error) {
        console.error(error);
    };

    // const requestOptions = {
    //     method: "GET",
    //     redirect: "follow"
    // };

    // fetch("https://api.open-meteo.com/v1/forecast?latitude=43.0481&longitude=-76.1474&current=precipitation,temperature_2m,cloud_cover&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch", requestOptions)
    //     .then((response) => response.text())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.error(error));

}

getData()



function updateWeather(data) {
    const currentPrecip = document.getElementById("precip")
    const currentTemp = document.getElementById("temp")
    const weatherEmoji = document.getElementById("wx-emoji")
    console.log("updateWeather ran")

    currentPrecip.innerText = data.current.precipitation;
    currentTemp.innerText = data.current.temperature_2m;
    console.log("Current precip is" + currentPrecip)

    if (data.current.cloud_cover >= 50) {
        weatherEmoji.innerText = "☁️";
    } else {
        weatherEmoji.innerText = "☀️";
    }
}


