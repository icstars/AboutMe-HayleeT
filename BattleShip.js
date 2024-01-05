let guess = prompt("Enter a letter A-J and number 1-10");
let battleShipONE = [
    [0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];

let computerShip = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]

];

let columnMapping = {
    'A': 0,
    'B': 0,
    'C': 0,
    'D': 0,
    'E': 0,
    'F': 0,
    'G': 0,
    'H': 0,
    'I': 0,
    'J': 0
};


function battleship(row,column){
    for(let row = 0; row < 10; row++){
        for(let column = 0; column <10; column++){
            if(
               battleShipONE[row][column]
            ){
                return "HIT!";
            }
        }
    } return "Miss :(";
}
function randomNum(){
    return Math.floor(Math.random()*10)
} 
    
    function comShip(row,column){
        for(let row = 0; row < 10; row++){
            for(let column = 0; column <10; column++){
                if(
                    computerShip[row][column]
                    ){
                        return "HIT!";
                    }
                }
            } return "Miss :(";
        }
            console.log(battleship(row),(column));
            console.log(comShip(randomNum(),randomNum()));
        
        // let BattleShipONE = [
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
    
// ];

// let BattleShipTWO = [
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]
//     [0,0,0,0,0,0,0,0,0,0]

    
// ];

// let guess = prompt("Enter a letter A-J and number 1-10");

// function battleship(board,guess){
//     for
// }

// let BattleShipONE = [
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0]
// ];

// let BattleShipTWO = [
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0]
// ];

// function updateBoard(board, guess) {
    
//     const letter = guess.charAt(0).toUpperCase();
//     const col = letter.charCodeAt(0) - 'A'.charCodeAt(0);

    
//     const row = parseInt(guess.substring(1)) - 1;

    
//     if (board[row][col] === 1) {
//         console.log("Hit!");
//         board[row][col] = 'X'; 
//     } else {
//         console.log("Miss!");
//         board[row][col] = 'O'; 
//     }
// }


// while (true) {
//     let guess = prompt("Enter a letter A-J and number 1-10");

    
//     if (/^[A-Ja-j][1-9]|10$/.test(guess)) {
//         updateBoard(BattleShipONE, guess);
//         updateBoard(BattleShipTWO, guess);
        
       
//         console.log("BattleShipONE:");
//         console.table(BattleShipONE);
//         console.log("BattleShipTWO:");
//         console.table(BattleShipTWO);
//     } else {
//         console.log("Invalid input. Please enter a letter A-J and number 1-10.");
//     }
// }
// console.log(updateBoard(BattleShipONE),(BattleShipTWO))

 
