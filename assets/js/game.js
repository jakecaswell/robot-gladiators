//Game States
// WIN = Player robot defeats all enemy robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// LOSE = Enemy robots defeat the player robot (health is = to zero)

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyNames) {
    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'FIGHT' to fight or 'SKIP' to run.");
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {

    
    //if the player chooses to skip the fight
     if (promptFight === "skip" || promptFight === "SKIP") { 
    //confirming the player wants to skip the fight
        var confirmSkip = window.confirm("Are you sure you would like to quit?");
    //if yes(true) then the player will skip the fight
        if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight!");
        //subtract money from the player to penalize leaving
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
}

    //player chooses to fight
    if (promptFight === "FIGHT" || promptFight === "fight"){
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");

    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");
        playerMoney = playerMoney + 20;
        break;
    }
    else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
     } 
     else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}


else {
    window.alert("You need to choose a valid option. Try again!");
}
    }
};

var startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting new fight
            enemyHealth = 50;

            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
   // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
   endGame();
};

var endGame = function() {
    // If the player survives this message shows
    if (playerHealth > 0) {
        window.alert("Great Job, you've survived the game! You now have a score of " + playerMoney + ".");
    }

    else {
        window.alert("You've lost your robot in battle.")
    }

    // ask a player if they want to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm) {
        //restart the game
        startGame();
    }

    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// start the game when the page loads
startGame();