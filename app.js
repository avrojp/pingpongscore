// App
// App
// App

const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const gameInfo = document.querySelector(".info");
const p1Button = document.querySelector(".p1btn");
const p2Button = document.querySelector(".p2btn");
const resetButton = document.querySelector(".reset-btn");
const selectScore = document.querySelector("#select-score");
let pageUrl = window.location.href;
let selectedScore = "";
let p1Score = 0;
let p2Score = 0;
selectScore.addEventListener("change", () => {
  selectedScore = selectScore.value;
  selectScore.disabled = true;
  resetButton.textContent = "Reset";
  gameInfo.innerHTML = `Winning score is<br>${selectedScore}`;
  if (selectedScore !== "") {
    p1Button.addEventListener("click", () => {
      if (p1Score < selectedScore) {
        p1Score++;
        p1Display.textContent = p1Score;
      }
      if (p1Score == selectedScore) {
        p1Display.classList.add("green");
        p2Display.classList.add("red");
        gameInfo.innerHTML = `Player<br>1<br>Win!!!`;
        p1Button.disabled = true;
        p2Button.disabled = true;
      }
    });
    // p2Score
    p2Button.addEventListener("click", () => {
      if (p2Score < selectedScore) {
        p2Score++;
        p2Display.textContent = p2Score;
      }
      if (p2Score == selectedScore) {
        p2Display.classList.add("green");
        p1Display.classList.add("red");
        gameInfo.innerHTML = `Player<br>2<br>Win!!!`;
        p1Button.disabled = true;
        p2Button.disabled = true;
      }
    });
  }
  resetButton.addEventListener("click", () => {
    gameInfo.innerHTML = `<br>Resetting...<br>`;
    setTimeout(() => {
      gameInfo.innerHTML = `Wait<br>A<br>Second!!!`;
      setTimeout(() => {
        window.location.href = pageUrl;
      }, 1000);
    }, 1000);
  });
});

// Design
// Design
// Design
// Design

const hint = document.querySelector(".hint");
const hintInfo = document.querySelector(".hint-info");

hint.addEventListener("click", (evt) => {
  evt.stopPropagation();
  hint.classList.add("hint-hover");
  hintInfo.style.display = "block";
  hintInfo.style.animation = "rollin 250ms ease-in 50ms 1 normal none";
  setTimeout(() => {
    hintInfo.style.opacity = 1;
  }, 250);
  hintInfo.style.bottom = "16px";
  hintInfo.style.right = "16px";
});

const container = document.querySelector(".container");
container.addEventListener("click", () => {
  hintInfo.style.animation = "rollout 250ms ease-in 50ms 1 normal none";
  setTimeout(() => {
    hint.classList.remove("hint-hover");
    hintInfo.style.display = "none";
    hintInfo.style.bottom = 0;
    hintInfo.style.right = 0;
    hintInfo.style.opacity = 0;
  }, 250);
});
