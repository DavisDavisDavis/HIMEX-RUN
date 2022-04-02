const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 250;

class Enemy {
  x: number;
  //y: number;
  speed: number;
  context: CanvasRenderingContext2D;

  constructor(speed: number) {
    this.speed = speed;
    this.context = context;
    this.x = canvas.width;
  }

  movement() {
    this.x -= this.speed;
    if (-50 >= this.x) {
      this.x = canvas.width;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    this.movement();
    context.fillStyle = "pink";
    context.fillRect(this.x, 100, 50, 50);
  }
}

const enemy = new Enemy(1.2);
(function animate() {
  context.fillStyle = "#a1a9fe";
  context.fillRect(0, 0, canvas.width, canvas.height);

  enemy.draw(context);

  window.requestAnimationFrame(animate);
})();
