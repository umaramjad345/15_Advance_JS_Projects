const inputEl = document.getElementById("inputCity");
const formEl = document.querySelector("form");
const detailsEls = document.querySelector(".details");

async function getWeatherData(inputCity) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=eaaea6f065df3274a3a71483c4bccd77`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Response wan't OK");
    }
    const data = await response.json();

    const icon = data.weather[0].icon;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    console.table(icon, temperature, description);
    const details = [
      `Feels Like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind Speed: ${data.wind.speed} m/s`,
    ];

    document.querySelector(".icon").innerHTML = ` <img
                  src="http://openweathermap.org/img/wn/${icon}.png"
                  alt="Weather Icon"
                />`;
    document.querySelector(".temperature").textContent = `${Math.round(
      temperature - 273.15
    )}°C`;
    document.querySelector(".description").textContent = description;

    detailsEls.innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    document.querySelector(".icon").innerHTML = "";
    document.querySelector(".temperature").textContent = "";
    document.querySelector(".description").textContent =
      "An Error Occurred, Please Try Again Later";

    detailsEls.innerHTML = "";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputCity = inputEl.value;
  getWeatherData(inputCity);
});
