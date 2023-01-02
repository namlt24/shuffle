const btnLetter = document.querySelector(".form__btn--letter");
const btnWord = document.querySelector(".form__btn--word");

const inputLetters = document.querySelector(".form__input--letters");
const inputWords = document.querySelector(".form__input--words");
const letterMovements = document.querySelector(".convert_letter");
const wordMovements = document.querySelector(".convert_word");

let wordArray = [];
let letterArray = [];

String.prototype.shuffle = function () {
  var a = this.split(""),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
};

Array.prototype.shuffleWord = function () {
  var i = this.length;
  if (i == 0) return this;
  while (--i) {
    var j = Math.floor(Math.random() * (i + 1));
    var a = this[i];
    var b = this[j];
    this[i] = b;
    this[j] = a;
  }
  return this;
};

btnLetter.addEventListener("click", function (e) {
  e.preventDefault();
  const wordByWord = inputLetters.value.split(",");
  wordByWord.forEach((element) => {
    element = element.trim();
    const letterObject = {};
    letterObject.req = element;
    letterObject.res = element
      .shuffle()
      .toLowerCase()
      .replace(/\s/g, "")
      .split("")
      .join("/");
    letterArray.push(letterObject);
  });
  letterArray.forEach(function (mov, i) {
    const html = `
      <div class="convert_letter_item">
       <span>${mov.req}</span><span> - </span><span>${mov.res}</span>
      </div>
    `;

    letterMovements.insertAdjacentHTML("afterbegin", html);
  });
  letterArray = [];
});

btnWord.addEventListener("click", function (e) {
  e.preventDefault();
  const wordByWord = inputWords.value.split(",");
  wordByWord.forEach((element) => {
    element = element.toString().replace(/\s/g, " ").trim();
    const wordObject = {};
    wordObject.req = element;
    wordObject.res = element
      .split(" ")
      .shuffleWord()
      .join("/")
      .toLowerCase()
      .replace(/\s/g, "");
    wordArray.push(wordObject);
  });
  wordArray.forEach(function (mov, i) {
    const html = `
        <div class="convert_word_item">
         <span>${mov.req}</span><span> - </span><span>${mov.res}</span>
        </div>
      `;

    wordMovements.insertAdjacentHTML("afterbegin", html);
  });
  wordArray = [];
});
