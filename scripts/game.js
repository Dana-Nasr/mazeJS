document.getElementById("start").addEventListener("mouseenter", startGame);
const box = document.querySelector(".boundary.example");
function startGame() {
  document.getElementById("start").style.display = "none";
  moveCursor();
}

function moveCursor() {
  const boundaries = document.querySelectorAll(".boundary");
  boundaries.forEach((boundary) => {
    boundary.addEventListener("mouseenter", writeResult);
  });
}

function writeResult() {
  document.getElementById("start").style.display = "block";
  box.textContent = "game lost";
}

document.getElementById("end").addEventListener("mouseenter", winGame);
function winGame() {
  document.getElementById("end").style.display = "none";
  box.textContent = "game won";
}
