var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 250;
var Enemy = /** @class */ (function () {
    function Enemy(speed, context) {
        this.x = canvas.width;
        this.speed = speed;
        this.context = context;
    }
    Enemy.prototype.drawEnemy = function () {
        context.fillStyle = "pink";
        this.x -= this.speed;
        if (0 >= this.x) {
            this.x = canvas.width;
        }
        context.fillStyle = "pink";
        context.fillRect(this.x, 60, 50, 50);
    };
    return Enemy;
}());
var enemy = new Enemy(1, context);
(function animate() {
    context.fillStyle = "#a1a9fe";
    context.fillRect(0, 0, canvas.width, canvas.height);
    enemy.drawEnemy();
    window.requestAnimationFrame(animate);
})();
