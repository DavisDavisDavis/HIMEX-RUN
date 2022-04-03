const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 250;

class Hime {
  x: number;
  y: number;
  height: number;
  velocity: number;
  airborne: boolean;
  context: CanvasRenderingContext2D;

  constructor() {
    this.context = context;
    this.y = 10;
    this.height = 35;
    this.velocity = 2.4;
  }

  movement(e) {
    this.y += this.velocity;

    if (this.y >= 100) {
      this.velocity = 0;
      this.airborne = false;
    }

    if (e.click == true) {
      console.log();
    }
  }

  draw(context: CanvasRenderingContext2D) {
    this.movement();
    context.fillStyle = "pink";
    context.fillRect(100, this.y, 50, 50);
  }
}

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

const hime = new Hime();
const enemy = new Enemy(1.2);

(function animate() {
  context.fillStyle = "#a1a9fe";
  context.fillRect(0, 0, canvas.width, canvas.height);

  hime.draw(context);
  enemy.draw(context);

  window.requestAnimationFrame(animate);
})();

window.addEventListener("click", hime.movement, false);
