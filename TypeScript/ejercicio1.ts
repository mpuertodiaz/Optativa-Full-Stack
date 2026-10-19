type registroRanking = [number,string,boolean];

var position:number;
var playerName:string;
var finishedGame:boolean;
var ranking:registroRanking;

var hallOfRanking:registroRanking[]=[];

var player1 :registroRanking=[1, "Paco",true];
var player2 :registroRanking=[2, "Paca",false];
hallOfRanking.push(player1,player2);

function printRanking(registro:registroRanking[]):void{

for (let index = 0; index < registro.length; index++) {
    console.log( registro[index]);   
}}

printRanking(hallOfRanking);