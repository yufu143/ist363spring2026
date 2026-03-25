
    async function getData() {

            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };
        
            try {
                const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=43.0481&longitude=-76.1474&current=precipitation,temperature_2m,cloud_cover&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch", requestOptions);

                const result = await response.text();

                console.log(result)

            } catch (error) {
                console.error(error);
            };
            
        }

        getData()
