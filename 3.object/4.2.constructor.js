function Gun() {
    this.fire = () => console.log('탕탕')
}

function Shooter(shooterName, gun) {
    this.shooterName = shooterName
    this.fire = () => gun.fire()
}

let gun = new Gun()
let shooter1 = new Shooter('최한석', gun)
let shooter2 = new Shooter('한아름', gun)

shooter1.fire()
shooter2.fire()

//
function Ball() {}

function Player(playerName) {
    this.playerName = playerName
    this.pass = ball => ball
    this.kick = ball => ball
}

// 과제:
// 최한석이 한아름에게 공을 패스한다. 한아름은 양승일에게 공을 패스한다.
// 양승일은 공을 찬다.
let ball = new Ball()
let player1 = new Player('최한석')
let player2 = new Player('한아름')
let player3 = new Player('양승일')

console.log(player3.kick(player2.pass(player1.pass(ball))))