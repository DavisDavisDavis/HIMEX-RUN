var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 250;
var Hime = /** @class */ (function () {
    function Hime() {
        this.context = context;
        this.y = 80;
        this.height = 35;
        this.velocity = 2.4;
        this.charge = 0;
        this.airtime = 0;
        window.addEventListener("click", this.jump.bind(this), false);
    }
    Hime.prototype.movement = function () {
        this.y += this.velocity;
        if (this.airborne) {
            this.airtime++;
            this.velocity = -Math.cos(this.airtime / 10) * 10;
            console.log(-Math.cos(this.airtime / 10) * 10);
        }
        if (this.y >= 140) {
            this.velocity = 0;
            this.y = 140;
            this.airtime = 0;
            this.airborne = false;
        }
    };
    Hime.prototype.jump = function (e) {
        //this.airborne = true;
        console.log("jump!");
        this.y -= 1;
        this.airborne = true;
        /*
        while (true) {
          this.y += this.velocity;
          this.velocity += this.acceleration;
          // Don't go through the floor
          if (this.y < 140) {
            this.y = 140;
          }
          if (e.click && this.airborne) {
            this.velocity = -10;
          }
        }
        
        if (!this.airborne && this.charge == 0) {
          this.charge = 1;
          this.velocity = -60;
          this.airborne = true;
        } else if (this.charge > 0 && this.charge < 15) {
          this.charge++;
          console.log(this.charge);
          this.velocity = -60 - this.charge / 50;
        }
    
        if (this.grounded && this.jumpTimer == 0) {
          this.jumpTimer = 1;
          this.dy = -this.jumpForce;
        } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
          this.jumpTimer++;
          this.dy = -this.jumpForce - (this.jumpTimer / 50);
        }
        */
    };
    Hime.prototype.draw = function (context) {
        this.movement();
        context.fillStyle = "pink";
        context.fillRect(100, this.y, 50, 50);
    };
    return Hime;
}());
var Enemy = /** @class */ (function () {
    function Enemy(speed) {
        this.speed = speed;
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
        context.fillRect(this.x, 140, 50, 50);
    };
    return Enemy;
}());
var hime = new Hime();
var enemy = new Enemy(1.2);
(function animate() {
    context.fillStyle = "#a1a9fe";
    context.fillRect(0, 0, canvas.width, canvas.height);
    hime.draw(context);
    enemy.draw(context);
    window.requestAnimationFrame(animate);
})();
