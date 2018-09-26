//Checking the avatar and declaring one
let Avatar = "images/char-boy.png";
if (location.search === "?1") {
  Avatar = "images/char-boy.png";
} else if (location.search === "?2") {
  Avatar = "images/char-cat-girl.png";
} else if (location.search === "?3") {
  Avatar = "images/char-horn-girl.png";
} else if (location.search === "?4") {
  Avatar = "images/char-pink-girl.png";
} else if (location.search === "?5") {
  Avatar = "images/char-princess-girl.png";
}

// Enemies our player must avoid
var Enemy = function(horizontal, vertical, speed) {
    // Storing the cordinates of the enemy.
    this.xCordinate = horizontal;
    this.yCordinate = vertical;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //updating horizontal position of the enemy
    this.xCordinate += this.speed * dt;

    //applying the extreme conditions for the sprite to movement and also the speed as 1 dt is 1 px per second
    if (this.xCordinate > 510) {
        this.xCordinate = -50;
        this.speed = 90 + Math.floor(Math.random() * 200);
    }

    // Now for the collision conditions
    if (player.xCordinate < this.xCordinate + 80 &&
        player.xCordinate + 80 > this.xCordinate &&
        player.yCordinate < this.yCordinate + 60 &&
        player.yCordinate + 60 > this.yCordinate)
        {
        player.xCordinate = 202;
        player.yCordinate = 405;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.xCordinate, this.yCordinate);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  // the constructor function is same except the speed is not reqquired as the user speed is the key to move
  constructor(horizontal, vertical) {
    this.xCordinate = horizontal;
    this.yCordinate = vertical;
    this.player = Avatar;
    this.gems = 0;
  }

  update(dt){
    //The update function will be blank as the update key is the user pressing the keys nnot dt
  }

  render() {
    //Rendering the player as the same way we did for the enemy
    ctx.drawImage(Resources.get(this.player), this.xCordinate, this.yCordinate);
  }

  handleInput(keyCode){
    //Check the keycode to determine the direction and move the character towards that direction
    // x axis by 102 and y axis by 83
   //  not to go off the tiles
   if (keyCode == 'left' && this.xCordinate > 0) {
       this.xCordinate -= 101;
   };

   if (keyCode == 'right' && this.xCordinate < 405) {
       this.xCordinate += 101;
   };

   if (keyCode == 'up' && this.yCordinate > 0) {
       this.yCordinate -= 83;
   };

   if (keyCode == 'down' && this.yCordinate < 405) {
       this.yCordinate += 83;
   };

   // wining situatuation reaching water
   if (this.yCordinate < 0) {
      this.xCordinate = 202;
      this.yCordinate = 405;
      window.location = `./win.html?${player.gems}`;

      // we can use the below code to not prompt a page and imidiatlly start the game after 1000ms of pause
       // setTimeout(() => {
       //     this.xCordinate = 202;
       //     this.yCordinate = 405;
       // }, 1000);
   };
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
//center location of the three concrete tiles
let enemyTileLocation = [63, 147, 230];

//Creating enemys only on three tiles in the middle and giving random speed and x starting cordinate on initialization
enemyTileLocation.forEach(function (yCord) {
  let randXCord = 0 + Math.floor(Math.random() * 351);
  let randSpeed = 90 + Math.floor(Math.random() * 200);
  let enemy = new Enemy(randXCord, yCord, randSpeed);
  allEnemies.push(enemy);
})

//The Start of the player can be found as 202 in the x cordinates and 405 in the y so,
let player = new Player(202,405);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

class Gems {
  constructor(xCord, yCord) {
    this.xCordinate = xCord;
    this.yCordinate = yCord;
    this.count= 0;
    this.gem = "images/Gem Blue.png";
  }

  update (dt) {

    //This will help in keeping the gem moving
    this.count += 1;

    if(this.count === 400){
      gem.eventhandle();
      this.count = 0;
    }

    // Now for the ccollection conditions
    if (player.xCordinate < this.xCordinate + 80 &&
        player.xCordinate + 80 > this.xCordinate &&
        player.yCordinate < this.yCordinate + 60 &&
        player.yCordinate + 60 > this.yCordinate)
        {
        player.gems += 1;
        gem.eventhandle();
    }
  }

  render() {
    ctx.drawImage(Resources.get(this.gem), this.xCordinate, this.yCordinate);
  }

//Defines new cordinates for the gems
  eventhandle() {
    let ranX = (0 + Math.floor(Math.random() * 5)) * 101;
    let ranY = ((1 + Math.floor(Math.random() * 5)) * 83) - 10;
    this.xCordinate = ranX;
    this.yCordinate = ranY;
  }
}

//Declaring a gem to rotate around
let gem = new Gems((0 + Math.floor(Math.random() * 5)) * 101 , ((1 + Math.floor(Math.random() * 5)) * 83) - 10);
