const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 250;

class Hime {
  x: number;
  y: number;
  width: number;
  height: number;
  velocity: number;
  acceleration: number;
  airtime: number;
  charge: number;
  airborne: boolean;
  context: CanvasRenderingContext2D;

  constructor() {
    this.context = context;
    this.x = 100;
    this.y = 80;
    this.width = 50;
    this.height = 35;
    this.velocity = 2.4;
    this.charge = 0;
    this.airtime = 0;
    window.addEventListener("mousedown", this.jump.bind(this), false);
  }

  movement() {
    this.y += this.velocity;

    if (this.airborne) {
      this.airtime++;
      this.velocity = -Math.cos(this.airtime / 25) * 10;
      //console.log(-Math.cos(this.airtime / 10) * 10);
    }

    if (this.y >= 140) {
      this.velocity = 0;
      this.y = 140;
      this.airtime = 0;
      this.airborne = false;
    }
  }

  jump(e: MouseEvent) {
    console.log("jump!");
    this.airborne = true;
    this.y -= 1;
  }

  draw(context: CanvasRenderingContext2D) {
    this.movement();
    context.fillStyle = "pink";
    context.fillRect(this.x, this.y, this.width, 50);
  }
}

class Enemy {
  x: number;
  y: number;
  width: number;
  speed: number;
  context: CanvasRenderingContext2D;

  constructor() {
    this.y = 50;
    this.width = 50;
    this.speed = 2;
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
    context.fillRect(this.x, 140, this.width, this.y);
  }
}

const hime = new Hime();
const enemy = new Enemy();
const gameOver = document.querySelector(".game-over");

function colission(hime: Hime, enemy: Enemy) {
  console.log(`hime: ${hime.x} enemy: ${enemy.x}`);
  console.log(`hime: ${hime.y} enemy: ${enemy.y}`);
  if (
    hime.x + hime.width > enemy.x &&
    hime.x < enemy.x + enemy.width &&
    hime.y > enemy.y
  ) {
    console.log("baang! 💥");
    //gameOver.style.display = "block";
    cancelAnimationFrame(animate);
  }
}

const scoreDisplay = document.querySelector(".score");
let score = 0;
function scoreIncrease(enemy: Enemy) {
  if (enemy.x <= -40) {
    enemy.speed += 0.2;
    score++;
    scoreDisplay.innerHTML = score;
  }
}

(function animate() {
  context.fillStyle = "#a1a9fe";
  context.fillRect(0, 0, canvas.width, canvas.height);

  hime.draw(context);
  enemy.draw(context);
  colission(hime, enemy);
  scoreIncrease(enemy);

  window.requestAnimationFrame(animate);
})();
