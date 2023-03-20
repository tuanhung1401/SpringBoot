


const facebookLink = document.createElement("a");
facebookLink.innerHTML = "facebook";
facebookLink.setAttribute("href", "https://www.facebook.com");
document.getElementsByTagName("body")[0].appendChild(facebookLink);

const wordCount = words.length;
const wordCounter = document.createElement("div");
wordCounter.innerHTML = `Number of words: ${wordCount}`;
document.getElementsByTagName("body")[0].appendChild(wordCounter);




