# Classic-Arcade-Game
This game is based on the classic arcade games used to be which lead to its name **"Classic Arcade Game"**. The whole game is a Udacity Nanodegree Final Project. The entire resources were provided by the Udacity Team, stuffs like the characters, the game board , the measurement and **the game engine**. I have utilized the complete resources and made the logic of the entire game using simple to read comments in addition to the provided instructions in the comments.

## Installation
Just clone the GitHub repo and you are done open _index_ file and start playing.
`git clone https://github.com/MayurChandpara/Classic-Arcade-Game.git`

## The Rules:
1. Use left, up, down, right Arrows to navigate the character.
2. Collect as many gems as you like, if you want to go an extra mile.
3. Reach the river to dive and win the Game.
4. Do not collide with the sprints that will send you back to start.
5. Best of luck. See you on the other side.

## Usages:
This game can be played by any age group excluding infants and a year children. Just Start OR Press the Start Button to go on gaming.
The Arrow keys are the playing keys so use them to navigate your character.

## Features:
- The game have _five_ changeable characters to choose from.
- The game uses the new _ES6 & the Old ES5_  both the class declarations.
- The game is divided into 3 different pages **Start.html, index.html** and **win.html**. This can be changed to modals.
- The game have to use the _query parsing_ while changing the pages to send the information over to the next page like the gems collected and the characters.
- If we use the _modals_ then the scripting will be in one single file and _no query parsing_ will require in the app.
- The game is based on 3 objects and which points to the 3 dots of the game the **Player, the enemy** and **the Gem**.
- The gem is programed to **appear randomly** on the board _except underground_ and _the river_ portion. And it update's it's place for **every 6 secs** or if the player collects (which ever is early).
- The game uses the canvas at the heart of all the processes.
- So the elements need to be loaded in to the game to use it in the game, and that is taken care under the resources files(the loading, caching and rendering).
- The game uses the **Delta time (dt)** for the animation of the spirits. Due to which the game behaves in almost the _same way on different devices_.
`dt = (Change in time) / 1000.0;`

## Conclusion
The game is built upon **classes, objects and methods**, it is a _Object Oriented Program_. **Think before you edit any files**. Specially the resources and the engine files.
If including new extra features _remember to mention_ that in the engine file and also to render. And before using and images make sure you pass that through the resources file and load the images there.
@MayurChandpara & @Udacity
