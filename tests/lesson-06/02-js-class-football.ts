class Team{
    name: string;
    players: {playerName: string; playerId: string}[] = [];
    constructor(name: string){
        this.name = name;
    }
    // method: addPlayer
    addPlayer(player: {playerName: string, playerId: string}){
        this.players.push(player);
    }
    // method: listPlayer
    listPlayer(){
        console.log(`Team: ${this.name}`);
        for (let key in this.players){
            console.log(`${this.players[key].playerId} - ${this.players[key].playerName}`);
        }
    }
}
const playerBoston = new Team("Boston");
playerBoston.addPlayer({playerName: "Henry", playerId: "B001"});
playerBoston.addPlayer({playerName: "Bob", playerId: "B002"});
playerBoston.listPlayer();

const playerTexas = new Team("Texas");
playerTexas.addPlayer({playerName: "Alex", playerId: "T001"});
playerTexas.addPlayer({playerName: "Alice", playerId: "T002"});
playerTexas.listPlayer();