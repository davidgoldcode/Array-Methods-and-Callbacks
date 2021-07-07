import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// A
const fifaFinal2014 = fifaData.filter(function(item){
    return item['Year'] === 2014 && item['Stage'] === "Final" 
});

console.log(fifaFinal2014[0]["Home Team Name"]);

// B
console.log(fifaFinal2014[0]["Away Team Name"]);

//C
console.log(fifaFinal2014[0]["Home Team Goals"]);

//D
console.log(fifaFinal2014[0]["Away Team Goals"]);

//E 
let fifaFinal2014Winner = (item) => item[0]["Home Team Goals"] > item[0]["Away Team Goals"] ? `The winner is: ${item[0]["Home Team Name"]}` : `The winner is: ${item[0]["Away Team Name"]}`
console.log(fifaFinal2014Winner(fifaFinal2014));

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data){
    const newArray = data.filter(function(item) {
        return item["Stage"] === "Final";
    })
    return newArray;
}

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback){
    const years = callback.map(function(item){
        return item["Year"];
    })
    return years;
};

console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinalsCB){
    const winners = [];
    const getFinals = getFinalsCB;
    getFinals.forEach(function(item){
        if (item["Home Team Goals"] > item["Away Team Goals"]){ 
            winners.push(item["Home Team Name"]);} 
            else {winners.push(item["Away Team Name"]);
        }
    })
    return winners;
};

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbGetWinners, cbGetYears) {
    let winners = cbGetWinners;
    let years = cbGetYears;
    const winnersAndYears = [];
    years.forEach(function(item, index){
        winnersAndYears.push(`In ${item}, ${winners[index]} won the worldcup`); 
    })
    return winnersAndYears;
};

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears((getFinals(fifaData)))));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const homeAvgs = data.reduce(function(accumulator, item) {
        return item["Home Team Goals"] + accumulator;
    }, 0)
    const awayAvgs = data.reduce(function(accumulator, item) {
        return item["Away Team Goals"] + accumulator;
    }, 0)
    return `The home team average is ${homeAvgs/data.length} goals per game & the away team average is ${awayAvgs/data.length} goals per game`
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, team_initials) {
    const theFinals = data.filter(function(item){
        return item["Stage"] === "Final"   
    })
    // console.log(theFinals);
    
    const countryAwayWins = theFinals.filter(function(item) {
        return item["Away Team Initials"] === team_initials;
    })

    const countryHomeWins = theFinals.filter(function(item) {
        return item["Away Team Initials"] === team_initials;
    })
    
    const totalCountryWins = [...countryAwayWins, ...countryHomeWins];
    // console.log(totalCountryWins);
    
    return `${team_initials} has had ${totalCountryWins.length} FIFA wins`;
};

console.log(getCountryWins(fifaData, "ITA"));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
    var counts = {};
    const finals = getFinals(data);
    let listOfTeams1 = finals.map(function(item){
        return `${item["Home Team Name"]}`;
    })

    let listOfTeams2 = finals.map(function(item){
        return `${item["Away Team Name"]}`;
    })

    let listOfTeams = [...listOfTeams1, ...listOfTeams2];
    console.log(listOfTeams) ;

    listOfTeams.forEach(function(item, index){
        var num = listOfTeams[index];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    })

    console.log(counts);

    listOfTeams.forEach(function(item){
        item === finals["Home Team Name"] ? counts.item.totalPoints += finals["Home Team Goals"] : item === finals["Away Team Name"] ? counts.item.totalPoints += finals["Away Team Goals"] : 0
    })
    
    console.log(counts);

//     finals.forEach(function(item){
//         listOfTeams.forEach(function(item) {
//             item === finals["Home Team Initials"] || item === finals["Away Team Initials"]
// ? listOfTeams["Total Score Tally"]+= 1 : 0;})
//     })

    console.log(listOfTeams);
};

console.log(getGoals(fifaData));


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
