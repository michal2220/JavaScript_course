'use strict';

const calcAverage = (game1, game2, game3) => {
    return (game1 + game2 + game3) / 3;
}

const scoreDolphins = calcAverage(85, 84, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgKoalas > avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
