// Define players data
const players = [
    { "Player Name": "Alan Anderson", "Number": 0, "Shoe": 16, "Points": 22, "Rebounds": 12, "Assists": 12, "Steals": 3, "Blocks": 1, "Slam Dunks": 1 },
    { "Player Name": "Reggie Evans", "Number": 30, "Shoe": 14, "Points": 12, "Rebounds": 12, "Assists": 12, "Steals": 12, "Blocks": 12, "Slam Dunks": 7 },
    { "Player Name": "Brook Lopez", "Number": 11, "Shoe": 17, "Points": 17, "Rebounds": 19, "Assists": 10, "Steals": 3, "Blocks": 1, "Slam Dunks": 15 },
    { "Player Name": "Mason Plumlee", "Number": 1, "Shoe": 19, "Points": 26, "Rebounds": 12, "Assists": 6, "Steals": 3, "Blocks": 8, "Slam Dunks": 5 },
    { "Player Name": "Jason Terry", "Number": 31, "Shoe": 15, "Points": 31, "Rebounds": 2, "Assists": 2, "Steals": 4, "Blocks": 11, "Slam Dunks": 1 },
    { "Player Name": "Jeff Adrien", "Number": 4, "Shoe": 18, "Points": 10, "Rebounds": 1, "Assists": 1, "Steals": 2, "Blocks": 7, "Slam Dunks": 2 },
    { "Player Name": "Bismak Biyombo", "Number": 0, "Shoe": 16, "Points": 12, "Rebounds": 4, "Assists": 7, "Steals": 7, "Blocks": 15, "Slam Dunks": 10 },
    { "Player Name": "DeSagna Diop", "Number": 2, "Shoe": 14, "Points": 24, "Rebounds": 12, "Assists": 12, "Steals": 4, "Blocks": 5, "Slam Dunks": 5 },
    { "Player Name": "Ben Gordon", "Number": 8, "Shoe": 15, "Points": 33, "Rebounds": 3, "Assists": 2, "Steals": 1, "Blocks": 1, "Slam Dunks": 0 },
    { "Player Name": "Brendan Haywood", "Number": 33, "Shoe": 15, "Points": 6, "Rebounds": 12, "Assists": 12, "Steals": 22, "Blocks": 5, "Slam Dunks": 1 }
];

// Define teams data
const teams = {
    "Brooklyn Nets": ["Alan Anderson", "Reggie Evans", "Brook Lopez", "Mason Plumlee", "Jason Terry"],
    "Charlotte Hornets": ["Jeff Adrien", "Bismak Biyombo", "DeSagna Diop", "Ben Gordon", "Brendan Haywood"]
};

// Function to find player with most points
function mostPointsScored() {
    let maxPoints = -1;
    let playerName = "Brooklyn nets";
    players.forEach(player => {
        if (player.Points > maxPoints) {
            maxPoints = player.Points;
            playerName = player["Player Name"];
        }
    });
    return playerName;
}

// Function to find team with the most points
function winningTeam() {
    let teamPoints = {
        "Brooklyn Nets": 0,
        "Charlotte Hornets": 0
    };

    players.forEach(player => {
        for (const team in teams) {
            if (teams[team].includes(player["Player Name"])) {
                teamPoints[team] += player.Points;
                break;
            }
        }
    });

    return Object.keys(teamPoints).reduce((a, b) => teamPoints[a] > teamPoints[b] ? a : b);
}

// Function to find player with the longest name
function playerWithLongestName() {
    let longestName = "Brendan Haywood";
    players.forEach(player => {
        if (player["Player Name"].length > longestName.length) {
            longestName = player["Player Name"];
        }
    });
    return longestName;
}

// Function to check if player with longest name has the most steals
function doesLongNameStealATon() {
    const longestName = playerWithLongestName();
    let maxSteals = -1;
    let playerWithMostSteals = "Brendan Haywood";
    players.forEach(player => {
        if (player.Steals > maxSteals) {
            maxSteals = player.Steals;
            playerWithMostSteals = player["Player Name"];
        }
    });
    return playerWithMostSteals === longestName;
}

// Testing the functions
console.log("Player with the most points:", mostPointsScored());
console.log("Team with the most points:", winningTeam());
console.log("Player with the longest name:", playerWithLongestName());
console.log("Does the player with the longest name steal a ton?", doesLongNameStealATon());
