const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btnEl = document.getElementById("btn");

const apiURL = "https://api.quotable.io/random";
async function getQuote() {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";

    const response = await fetch(apiURL);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Get a Quote";
    quoteEl.innerText = data.content;
    authorEl.innerText = "~" + data.author;
  } catch (error) {
    quoteEl.innerText = "An Error Occurred, Please Try Again Later";
    authorEl.innerText = "An Error Occurred";
    btnEl.innerText = "Get a Quote";
    btn.disabled = false;
  }
}

btnEl.addEventListener("click", () => {
  getQuote();
});
