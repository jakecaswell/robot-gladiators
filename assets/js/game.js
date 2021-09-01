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
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
    }
}

    //player chooses to fight
    if (promptFight === "FIGHT" || promptFight === "fight"){
    
    // generate random damage value based on player's attack power
    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
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
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
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
    fight();

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
            enemyHealth = randomNumber(40,60);

            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
            
            // if the player is still alive and we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                //ask if the player would like to shop after the round is over
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                
                //if yes take the player to the store
                if (storeConfirm) {
                    shop();
                }
            }
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

var shop = function() {
    // ask the player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', OR 'LEAVE' to make a choice."
    );
    // use switch to carry out the action
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill": 
        if(playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        
            // increase playerHealth by 20 and decrease playerMoney by 7
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
            break;
        case "UPGRADE":
        case "upgrade":
            if(playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            // increase health and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
        }
        else {
            window.alert("You don't have enough money!");
        }

            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            //do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;


    }  
};


var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// start the game when the page loads
startGame();