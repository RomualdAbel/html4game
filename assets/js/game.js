/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var canvasWidth = 800;
var canvasHeight = 600;


$('#gameCanvas').attr('width',canvasWidth);
$('#gameCanvas').attr('height',canvasHeight);

var keysDown = {};

$('body').bind('keydown', function(e){
    keysDown[e.which] = true; 
});

$('body').bind('keyup', function(e){
    keysDown[e.which] = false; 
});



//creation du context
var canvas = $("#gameCanvas")[0].getContext('2d');

//declaration d'une image
var image = new Image();
image.src = "assets/img/player.png";
var playerX = (canvasWidth/2 - (image.width/2));
var playerY = (canvasHeight/2 - (image.height/2));


var FPS = 30;

setInterval(function() {
    update();
    draw();
}, 1000/FPS );

function update(){
    
    if(keysDown[37]){
        playerX -= 10; //gauche
    }
    if(keysDown[38]){
        playerY -= 10; //bas
    }
    if(keysDown[39]){
        playerX += 10; //droite
    }
    if(keysDown[40]){
        playerY += 10; //haut
    }
    
    playerX = clamp(playerX, 0, canvasWidth - image.width);
    playerY = clamp(playerY, 0, canvasHeight - image.height);
    
}

function clamp(a, min, max){
    if(a < min){
        return min;
    }else if (a > max){
        return max;
    }else {
        return a;
    }
}

function draw(){
    //creation d'un border rectangle autour du canvas
    canvas.clearRect(0, 0, canvasWidth,canvasWidth)
    canvas.strokeRect(0, 0, canvasWidth, canvasHeight);
    canvas.drawImage(image, playerX, playerY);
}

