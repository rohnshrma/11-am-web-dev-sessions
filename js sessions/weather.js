var api_key = "3ed1a8944ae36bde087adc8f67d0f04a";

async function fetchWeather(URL) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(JSON.parse(request.responseText));
      }
      if (request.readyState === 4 && request.status !== 200)
        reject("Failed to fetch weather");
    });

    request.open("GET", URL);
    request.send();
  });
}

async function handleRequest(city) {
  var URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  try {
    console.log(URL);

    var response = await fetchWeather(URL);
    console.log(response);
    console.log(response.main.feels_like);
    console.log(response.main.temp);
    console.log(response.weather[0].description);
    console.log(response.name);
  } catch (err) {
    console.log("Failed to fetch weather!", err);
  }
}
