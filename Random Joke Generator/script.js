const jokeEl = document.querySelector(".joke");
const btnEl = document.querySelector(".btn");

const apiKey = "bCJPJBKWl1EQDfkTFUXCcQ==MCq4rOV9sM03PryD";

const options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An Error Occured, Please Try Again Later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
