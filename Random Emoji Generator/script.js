const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emojiName");

const emoji = [];

async function getEmoji() {
  const response = await fetch(
    "https://emoji-api.com/emojis?access_key=e2ece3fc144b4f0cac330823223eae8404c4825b"
  );
  const data = await response.json();

  // console.log(data); This API gives all the data in one call, so we need to store it in an array
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCode;
});
