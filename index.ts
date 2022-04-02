const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 250;

let enemyX = 0;

(function animate() {
  context.fillStyle = "#a1a9fe";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "pink";

  function enemyMovement() {
    enemyX -= 1;
    if (0 >= enemyX) {
      enemyX = canvas.width;
    }
    return enemyX;
  }

  context.fillRect(enemyMovement(), 50, 50, 50);

  window.requestAnimationFrame(animate);
})();
