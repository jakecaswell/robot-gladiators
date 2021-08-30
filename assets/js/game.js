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
    // alerts player they are starting the round
     window.alert("Welcome to Robot Gladiators!");
    
    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'FIGHT' to fight or 'SKIP' to run.");

    //player chooses to fight
    if (promptFight === "FIGHT" || promptFight === "fight"){
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");

    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");
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
     } 
     else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}
//if the player chooses to skip the fight
else if (promptFight === "skip" || promptFight === "SKIP") { 
    //confirming the player wants to skip the fight
    var confirmSkip = window.confirm("Are you sure you would like to quit?");
    //if yes(true) then the player will skip the fight
    if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight!");
        //subtract money from the player to penalize leaving
        playerMoney = playerMoney - 2;
    }
    //if no (false) rerun the fight() function to start the process again. Giving the player an option to instead choose to fight if they do not want to get rid of their money
    else {
        fight();
    }
}
else {
    window.alert("You need to choose a valid option. Try again!");
}
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}