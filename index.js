var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 500;
var Hime = /** @class */ (function () {
    function Hime() {
        this.context = context;
        this.x = 100;
        this.y = 80;
        this.width = 50;
        this.height = 50;
        this.velocity = 2.4;
        this.charge = 0;
        this.airtime = 0;
        window.addEventListener("mousedown", this.jump.bind(this), false);
    }
    Hime.prototype.movement = function () {
        this.y += this.velocity;
        if (this.airborne) {
            this.airtime++;
            this.velocity = -Math.cos(this.airtime / 25) * 10;
            //console.log(-Math.cos(this.airtime / 10) * 10);
        }
        if (this.y >= 300) {
            this.velocity = 0;
            this.y = 300;
            this.airtime = 0;
            this.airborne = false;
        }
    };
    Hime.prototype.jump = function (e) {
        console.log("jump!");
        this.airborne = true;
        this.y -= 1;
    };
    Hime.prototype.draw = function (context) {
        this.movement();
        context.fillStyle = "pink";
        context.fillRect(this.x, this.y, this.width, this.height);
    };
    return Hime;
}());
var Enemy = /** @class */ (function () {
    function Enemy() {
        this.y = 300;
        this.width = 50;
        this.speed = 2;
        this.context = context;
        this.x = canvas.width;
    }
    Enemy.prototype.movement = function () {
        this.x -= this.speed;
        if (-50 >= this.x) {
            this.x = canvas.width;
        }
    };
    Enemy.prototype.draw = function (context) {
        this.movement();
        context.fillStyle = "pink";
        context.fillRect(this.x, this.y, this.width, this.width);
    };
    return Enemy;
}());
var hime = new Hime();
var enemy = new Enemy();
var gameOver = document.querySelector(".game-over");
function colission(hime, enemy) {
    //console.log(`hime: ${hime.x} enemy: ${enemy.x}`);
    console.log("hime: ".concat(hime.y, " enemy: ").concat(enemy.y));
    if (hime.x + hime.width > enemy.x &&
        hime.x < enemy.x + enemy.width &&
        hime.y + hime.height > enemy.y) {
        console.log("baang! 💥");
        gameOver.style.display = "block";
        cancelAnimationFrame(animate);
    }
}
var scoreDisplay = document.querySelector(".score");
var score = 0;
function scoreIncrease(enemy) {
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
