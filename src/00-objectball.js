console.log('Advanced debugging example running.');
debugger


function goodPractices() {
    let game = gameObject();
    for (let gameKey in game) {

        debugger
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {

            debugger


            if (teamObj.hasOwnProperty('player')) {
                let data = teamObj.player;
                for (let key in data) {
                    debugger
                }
            }
        }
    }
}


function gameObject() {
    return {
        home: {
            teamName: 'Home Team',
            player: {
                player1: { name: 'John Doe', points: 20 },
                player2: { name: 'Jane Smith', points: 15 }
            }
        },
        away: {
            teamName: 'Away Team',
            player: {
                player3: { name: 'Jim Brown', points: 25 },
                player4: { name: 'Jake White', points: 10 }
            }
        }
    };
}


goodPractices();