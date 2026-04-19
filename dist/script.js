const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawGround() {
  ctx.fillStyle = "#8B5A2B";
  ctx.fillRect(0, 200, canvas.width, 100);
}

function drawSnowText() {
  ctx.font = "80px Verdana";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillStyle = "blue";
  ctx.fillText("SNOW", canvas.width / 2, 10);
}

function drawSnowman() {
  ctx.fillStyle = "white";

  ctx.beginPath();
  ctx.arc(150, 200, 50, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(150, 120, 40, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(150, 60, 25, 0, Math.PI * 2);
  ctx.fill();
}

function drawSingleFlake(x, y) {
  ctx.fillStyle = "#eee";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 5, y + 5);
  ctx.lineTo(x, y + 10);
  ctx.lineTo(x - 5, y + 5);
  ctx.fill();
}

function drawSnowflakes() {
  for (let i = 0; i < 100; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    drawSingleFlake(x, y);
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#d3d3d3";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawGround();
  drawSnowText();
  drawSnowman();
  drawSnowflakes();
}

draw();
