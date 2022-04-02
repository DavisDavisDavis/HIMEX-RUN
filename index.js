var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 250;
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
        return this.x;
    };
    Enemy.prototype.draw = function (context) {
        context.fillStyle = "pink";
        context.fillStyle = "pink";
        context.fillRect(this.movement(), 100, 50, 50);
    };
    return Enemy;
}());
var enemy = new Enemy(1.2);
(function animate() {
    context.fillStyle = "#a1a9fe";
    context.fillRect(0, 0, canvas.width, canvas.height);
    enemy.draw(context);
    window.requestAnimationFrame(animate);
})();
