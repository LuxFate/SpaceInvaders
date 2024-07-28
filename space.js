//map
let tileSize =32;
let rows = 16;
let columns = 16;

let map;
let mapWidth = tileSize * columns;
let mapHeight = tileSize * rows;
let context;

//Ship
let shipWidth = tileSize*2;
let shipHeight = tileSize;
let shipX = tileSize * columns/2 - tileSize;
let shipY = tileSize * rows - tileSize*2;

let ship = {
    x : shipX,
    y : shipY,
    width : shipWidth,
    height : shipHeight
}

let shipImg;
let shipVelocityX = tileSize;

window.onload = function(){
    map = document.getElementById("map");
    map.width = mapWidth;
    map.height = mapHeight;
    context = map.getContext("2d")

    shipImg = new Image();
    shipImg.src = "./ship.png";
    shipImg.onload = function(){
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    }

    requestAnimationFrame(update);
    document.addEventListener("keydown", moveShip);
}

function update(){
    requestAnimationFrame(update);

    context.clearRect(0, 0, map.width, map.height);
 
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
}

function moveShip(e){
    //checks if left key is pressed and if the x position 
    //of ship reaches the left side of the canvas
    if(e.code == "ArrowLeft" && ship.x - shipVelocityX >= 0){
        ship.x -= shipVelocityX;
    }
    //checks if right key is pressed and if the x position 
    //of ship reaches the right side of the canvas
    else if(e.code == "ArrowRight" && ship.x + shipVelocityX + ship.width <= map.width){
        ship.x += shipVelocityX;
    }
}