class Game{

constructor(){

}

getstate(){
 var refer = database.ref('gameState');
 refer.on("value",function(data){
     gameState = data.val();
 })
    
}

update(num){
database.ref('/').update({
 gameState: num  
})
}

start(){

    if(gameState === 0){
        player = new Player();
        player.getcount();

        form = new Form();
        form.display();
    }
    car1 = createSprite(100,200,50,50);
    car2 = createSprite(300,200,50,50);
    car3 = createSprite(500,200,50,50);
    car4 = createSprite(700,200,50,50);
    cars = [car1,car2,car3,car4];

}

play(){
    form.remove();
    text("Game Start",120,100);
    Player.getplayerinfo();
    if(allplayers !== undefined){
        //var position = 120;
        var index = 0;
        var x = 0;
        var y = 0;
        for(var plr in allplayers){
            index=index+1;
            x = x+200;
            y = displayHeight - allplayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;

            if(index === player.index){
                cars[index-1].shapeColor = "red"
            }
                
        }
    }
    if(keyIsDown(UP_ARROW)&& player.index !== null){
        player.distance = player.distance + 50;
        player.update();
    }
    drawSprites();
}

}