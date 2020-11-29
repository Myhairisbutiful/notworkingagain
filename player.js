class Player{

constructor(){
this.index = null;
this.distance = 0;
this.name = null;
}

getcount(){
    var refer = database.ref('playerCount');
    refer.on("value",(data)=>{
        playerCount = data.val();
    })
}
updateCount(count){
    database.ref('/').update({
        playerCount: count
       })
}

update(){
var playerIndex = "players/player" + this.index;
database.ref(playerIndex).update({
    name: this.name,
    distance: this.distance
   })

}

static getplayerinfo(){
    var Playerinfo = database.ref('players');
    Playerinfo.on("value",(data)=>{
    allplayers = data.val();    
    })
}

}