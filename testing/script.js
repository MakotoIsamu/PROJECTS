const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("color");
const clearButton = document.getElementById("clear-button");

let drawing = false;
let lastX = 0;
let lastY = 0;
ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = 5;

canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mouseout", () => (drawing = false));

colorPicker.addEventListener("input", (e) => (ctx.strokeStyle = e.target.value));

clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function draw(e) {
  if (!drawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}
