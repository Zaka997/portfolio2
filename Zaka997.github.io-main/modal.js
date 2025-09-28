
const textElement = document.getElementById("typewriter-text");
const lines = [
  "Pendant mon année, j'ai participé à plusieurs projets les voici :",
];
let lineIndex = 0;
let charIndex = 0;
let currentLine = '';
let isDeleting = false;

function typeLine() {
  if (lineIndex < lines.length) {
    currentLine = lines[lineIndex];
    if (charIndex <= currentLine.length) {
      textElement.innerHTML = currentLine.substring(0, charIndex);
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      lineIndex++;
      charIndex = 0;
      textElement.innerHTML += "<br>";
      setTimeout(typeLine, 500); // Pause entre les lignes
    }
  }
}

window.addEventListener("DOMContentLoaded", typeLine);

