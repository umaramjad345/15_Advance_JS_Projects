const currencyFirstEl = document.getElementById("currencyFirst");
const worthFirstEl = document.getElementById("worthFirst");
const currencySecondEl = document.getElementById("currencySecond");
const worthSecondEl = document.getElementById("worthSecond");
const exchageRateEl = document.getElementById("exchageRate");

function updateRate() {
  fetch(
    ` https://v6.exchangerate-api.com/v6/{yourapikey}/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      // console.log(rate);
      exchageRateEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySecondEl.value
      }`;
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}

updateRate();
currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);
