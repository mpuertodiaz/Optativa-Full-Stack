"use strict";
var position;
var playerName;
var finishedGame;
var ranking;
var hallOfRanking = [];
var player1 = [1, "Paco", true];
var player2 = [2, "Paca", false];
hallOfRanking.push(player1, player2);
function printRanking(registro) {
    for (let index = 0; index < registro.length; index++) {
        console.log(registro[index]);
    }
}
printRanking(hallOfRanking);
