function pressKey(char) {
  const display = document.getElementById("textDisplay");
  display.value += char;
}

function backspace() {
  const display = document.getElementById("textDisplay");
  display.value = display.value.slice(0, -1);
}
