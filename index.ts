const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 250;

class Enemy {
  x: number;
  y: number;
  speed: number;
  context: CanvasRenderingContext2D;

  constructor(speed: number, context: CanvasRenderingContext2D) {
    this.speed = speed;
    this.context = context;
  }

  x = canvas.width;
  drawEnemy() {
    context.fillStyle = "pink";

    this.x -= this.speed;
    if (0 >= this.x) {
      this.x = canvas.width;
    }

    context.fillStyle = "pink";
    context.fillRect(this.x, 60, 50, 50);
  }
}

const enemy = new Enemy(1, context);
(function animate() {
  context.fillStyle = "#a1a9fe";
  context.fillRect(0, 0, canvas.width, canvas.height);

  enemy.drawEnemy();

  window.requestAnimationFrame(animate);
})();
