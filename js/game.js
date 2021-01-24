//function
//passs an argument inside a function
//function press(a,b){

//}
//method and function
//class name{}


class game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })

        
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState === 0){
            player1 = new player()
            player1.getCount()
            form1 = new form()
            form1.display()
        }
    }
}