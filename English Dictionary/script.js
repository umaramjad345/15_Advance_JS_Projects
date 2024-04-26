const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("infoText");
const meaningContainerEl = document.getElementById("meaningContainer");
const titleEl = document.getElementById("title");
const meaningEl = document.querySelectorAll("#meaning");
const audioEl = document.getElementById("audio");

async function fetchAPI(word) {
  try {
    infoTextEl.style.display = "block";
    infoTextEl.innerText = `Searching the meaning of "${word}"`;
    meaningContainerEl.style.display = "none";
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());

    if (result.title) {
      meaningContainerEl.style.display = "block";
      infoTextEl.style.display = "none";
      titleEl.innerText = word;
      meaningEl.innerText = "N/A";
      audioEl.style.display = "none";
    } else {
      infoTextEl.style.display = "none";
      meaningContainerEl.style.display = "block";
      audioEl.style.display = "inline-flex";
      titleEl.innerText = result[0].word;
      meaningEl[0].innerText = result[0].meanings[0].definitions[0].definition;
      meaningEl[1].innerText = result[0].meanings[0].definitions[1].definition;
      meaningEl[2].innerText = result[0].meanings[0].definitions[2].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    console.log(error);
    infoTextEl.innerText = `An error occurred, please try again later`;
  }
}

inputEl.addEventListener("keyup", (event) => {
  if (event.target.value && event.key === "Enter") {
    fetchAPI(event.target.value);
    event.target.value = "";
  }
});
