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
    map.Height = mapHeight;
    context = map.getContext("2d")

    shipImg = new Image();
    shipImg.src = "./ship.png";
    shipImg.onload = function(){
        context.drawImage()
    }
}