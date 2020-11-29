class Form{

    constructor(){
         this.input = createInput("name");
        this.button = createButton("player registration");
        this.greeting = createElement('h2');
    }

display(){
    var title = createElement('h2');
    title.html("Multi Car Racing Game");
    title.position(displayWidth/2-50,displayHeight/2-80);

   
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);

    this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();

     player.name = this.input.value();
    playerCount = playerCount + 1;
    player.index = playerCount;
player.updateCount(playerCount);
player.update();

this.greeting.html("Welcome  " + player.name);
this.greeting.position(displayWidth/2-70,displayHeight/4);

    })
}

remove(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}



}