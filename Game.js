const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
let x = 0
let y = 300
let TestGame = null
let Game = Math.floor(Math.random() * 3)
let LastGame = Game
let speed = 10
let direction = null
let jumpHeight = 70;
let Health = 100
let GameScore = 0


let player = new Image();

player.src = "https://assets1.ignimgs.com/2016/07/06/boxboyjpg-19ae12.jpg?fit=bounds&width=188&height=188";

const Spikes = new Image();

Spikes.src = "https://openclipart.org/image/800px/svg_to_png/188235/1383412817.png";

const DeathBall = new Image();

DeathBall.src = "https://opengameart.org/sites/default/files/styles/medium/public/shield_4.png";




function GameUpdate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.drawImage(player, x, y, 55, 55);
  c.fillRect(0, 350, 9999, 1);
  c.fillText("Score: ", 20, 40 )
  c.fillText(GameScore, 60, 40)
  AlwaysChange()
  UpdateGameScore()
  if (Game === 0) {
    Spike(Spikes, 210, 310)
    Spike(Spikes, 410, 310)
    Spike(Spikes, 610, 310)

  }

  if (Game === 1) {
    Spike(Spikes, 210, 310)
    

  }
if (Game === 2) {
    Spike(Spikes, 210, 310)
    Spike(Spikes, 610, 310)

  }
}
setInterval(GameUpdate, 10);

function checkKeyPress(key) {
  switch (key.keyCode) {
    case 39: // RIGHT ARROW
      x += speed
      direction = "right";
      break;
    case 37: // LEFT ARROW
      x -= speed
      direction = "left";
      break;
    case 38: // UP ARROW TO JUMP
      Jump(direction)
  }
}

function releaseKey(key) {
  switch (key.keyCode) {
    case 39:
      direction = null;
    case 37:
      direction = null;
  }
}

// Adding the listeners for the player movement
window.addEventListener("keydown", checkKeyPress, false);
window.addEventListener("keyup", releaseKey, false);
// Creates Gravity for the jump
function Gravity(inertia) {
  var stepTime = 80;

  setTimeout(function () {
    y += jumpHeight / 5
    x += inertia / 5;
  }, stepTime)

  setTimeout(function () {
    y += jumpHeight / 5;
    x += inertia / 5;
  }, stepTime * 2)

  setTimeout(function () {
    y += jumpHeight / 5;
    x += inertia / 5;
  }, stepTime * 3)

  setTimeout(function () {
    y += jumpHeight / 5;
    x += inertia / 5;
  }, stepTime * 4)

  setTimeout(function () {
    y += jumpHeight / 5;
    x += inertia / 5;
  }, stepTime * 5)

}



function Jump(direction) {
  if (y === 300 || y === 650) {
    jumps = 0
  }
  if (jumps < 2) {
    y -= jumpHeight
    jumps += 1
    if (direction == "left") {
      x -= jumpHeight / 3;
      Gravity(-jumpHeight)


    }
    else if (direction == "right") {
      x += jumpHeight / 3
      Gravity(jumpHeight)

    } else {
      Gravity(0)
    }
  }
}


function check() {

  if (TestGame === Game) {
    AlwaysChange()
  } else {
    Game = TestGame
    x = 0
    GameScore += 700
  }
}

function AlwaysChange() {

  if (x > 680 && y < 350) {
    TestGame = Math.floor(Math.random() * 3)
    check()

  }

}

function UpdateGameScore() {

  GameScore += 1

}

function Dad() {

player.src = "LluisFaus.png";


}