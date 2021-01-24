//class names the first letter in caps
//vars : small letter
//constant var A=1
//namespacing  getS



var database, Canvas, form1, player1, game1;


function setup(){
  database = firebase.database();  
  Canvas = createCanvas(500,500);
  game1 = new game()
  game1.getState()  
  game1.start()
  
}

function draw(){
  background("white");
  
    drawSprites();
  
}


