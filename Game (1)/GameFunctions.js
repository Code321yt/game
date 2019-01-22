function EvilBall(Image, EnemyX, EnemyY) {
  c.drawImage(Image, EnemyX, EnemyY, 40, 40)
  EnemyX -= 2
  if (EnemyX < 0 ) {
    EnemyX = 700
  }


  if (x > EnemyX - 40 && y > EnemyY - 40 && x < EnemyX + 40 && y < EnemyY + 52) {
      alert("You Just Got Eliminated Say Bye Bye.")
      x = 0
      GameScore = 0
  }



}



function Spike(Image, EnemyX, EnemyY) {
 c.drawImage(Image, EnemyX, EnemyY, 10, 40)

  if (x > EnemyX - 40 && y > EnemyY - 40 && x < EnemyX && y < EnemyY + 55) {
      alert("You Just Got Eliminated Say Bye Bye.")
      x = 0
      GameScore = 0
      direction = null

      }
 

}

function Die() {
  if (Health = 0)
  alert("You Lost")
}