const spanMess = document.querySelector("span.mess-with-me");
spanMess.style.fontSize = "40px";

const pMess = document.querySelector("p.mess-with-me");
pMess.style.backgroundColor = "green";

const removeImg = document.querySelector("#hide-me");
removeImg.style.display = "none";

const firstImg = document.querySelector("#triceratops");
firstImg.style.width = "324px";

function changeBackgroundToOrange() {
  spanMess.style.color = "orange";
}

spanMess.addEventListener("click", changeBackgroundToOrange);

function addRedBorder() {
  firstImg.style.border = "1px solid red";
}

firstImg.addEventListener("click", addRedBorder);

const featheredDino = document.querySelector("#feathers");

function transparent() {
  featheredDino.style.opacity = ".5";
}

featheredDino.addEventListener("click", transparent);

const switchButton = document.querySelector("#toggle");

function changeBackgroundToBlack() {
  const dinoRow = document.querySelector("#row");
  if (dinoRow.style.backgroundColor === "") {
    dinoRow.style.backgroundColor = "black";
  } else if (dinoRow.style.backgroundColor === "black") {
    dinoRow.style.backgroundColor = "";
  }
}

switchButton.addEventListener("click", changeBackgroundToBlack);

const bigDino = document.querySelector("#biggify");

function enlarge() {
  bigDino.style.width = "200px";
}

function regularSize() {
  bigDino.style.width = "162px";
}

bigDino.addEventListener("mouseover", enlarge);
bigDino.addEventListener("mouseout", regularSize);
