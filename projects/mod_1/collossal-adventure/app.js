// RPG 
const readline = require('readline-sync');
// let gameOver = false;
// let hasItem = false;

const playerName = readline.question('\nMay I have your name? ');

function getRandomChance(escapeChance) {
    return Math.floor(Math.random() * escapeChance + 1) }

//Game Variables:
Game:
enemies = ['Assassin', 'Zombie', 'Hunter', 'Ninja'];
maxEnergyHealth = 75;
enemyAttackDamage = 25;
// console.log(enemies)

//Player Variables
health = 100;
attackDamage = 50;
bonusHealth = 30;
// inventoryItems = 0;
healthDropChance = 50;
// escapeChance = 1;

let walking = true;
console.log('\nWelcome ' + playerName + '!' + ' I hope you enjoy this RPG game!' );

while(walking) {
    enemyHealth = Math.floor(Math.random() * Math.floor(maxEnergyHealth));
    enemy = Math.floor(Math.random() * Math.floor(3)) //(enemies.lenth))];
    console.log('\nThat night, you decided to take a walk. While walking you spotted something and ' + enemies[enemy] + ' appeared!')
// console.log(enemyHealth);

while(enemyHealth > 0) {
    console.log("\n\tYour HP: " + health);
    console.log("\t" + enemies[enemy] + "'s HP: "+ enemyHealth);
    readline.question("\nWhat would you like to do? Hit enter to continue");
    option = ['Throw a punch', 'Start running. '];
    choice = readline.keyInSelect(option, 'Choose wisely...');
    console.log('\nYou choose to: ' + option[choice] + '! \n');

// while(!gameOver) {
    if(choice === 0) {
        damageDealt = Math.floor(Math.random() * Math.floor(attackDamage));
        damageTaken = Math.floor(Math.random() * Math.floor(enemyAttackDamage));
        enemyHealth -= damageDealt;
        health -= damageTaken
        console.log("\t> You striked the " + enemies[enemy] + " for " + damageDealt + " damage.");
        console.log("\t> You received " + damageTaken + " in retaliation!")
        // console.log("\t> " + enemies[enemy] + " was defeated!");
        // console.log("\t> You have in total " + health + " HP:");
        // console.log("\t> Nice hit! you received extra HP")
    // } if (damageDealt > 50) {
        // console.log('\t> Nice hit! You received ' + bonusHealth)
        // console.log('\n\t You now have ' + health + " HP. ")
    } if(choice === 0 && health < 1) {
        console.log("\t> Sorry, you took too many blows to the head, and succomb to your injuries!");
        // gameOver = true;
break; 
        // continue;
    // } if (choice === 0 && health > 0) {
    // if(health > 0) {
        // health += bonusHealth; 
    // inventoryItems--;
    // console.log('\t> You found a substance on the floor, not knowing what it was... you drank it. ');
        // console.log("\t> You now have a total " + health + " HP after using the item from your inventory.")
        // console.log("\t> Lucky you, #" + inventoryItems + " item found on the ground, you picked it up and added it to your inventory.")
        // hasItem = true;
        // gameOver = false;
     } else if (choice === 1) {
        function getRandomChance(escapeChance) {
            return Math.floor(Math.random() * escapeChance + 1) 
        }
         console.log("\t> You actually got away from " + enemies[enemy] + "!")
            // escapeChance = Math.random();
        // console.log('\t> Chances of escaping' + escapeChance) 
        // gameOver = false
    }else 
    // console.log('\t> Your too slow and ' + enemies[enemy] + ' killed you!')
        // console.log("\t>Invalid command!");
        // gameOver= true;
continue;
// break;
    }
    // if(choice === 0 && health < 1) {
        // console.log("\t> You calapsed and died from your injuries.")
        // gameOver= true;
        // break;
        // }
        console.log("\t> " + enemies[enemy] + " was defeated! ");
        // console.log("\t> You have in total " + health + " HP:");
    if (healthDropChnace = Math.floor(Math.random() < Math.floor(3))) {
        // console.log("\t> " + enemies[enemy] + " was defeated!");
        // console.log("\t> You have in total " + health + " HP:");
    // inventoryItems++;
        // console.log("\t> Oh no! " + enemies[enemy] + " dropped an item. You picked it up and decided to use it instead of putting it in your item inventory. ");
        // console.log("\t> You picked it up and have #" + inventoryItems + " item that can be added to your inventory or used to increase HP.")
        }
    readline.question("\nWhat would you like to do next?. Hit enter to continue. ");
    options = ['Continue playing', 'Leave the game']; 
    answer = readline.keyInSelect(options, 'Choose carefully...');
    while(!answer === 0 && !answer === 1) {
        console.log("\t> Invalid command!");
    } if(answer === 0) {
        console.log("\t> You want to continue playing")
        // gameOver = false;
    }else if(answer === 1) {
        console.log("\t> You want to leave the game!");
        console.log("\t\n Thanks for playing " + playerName + '!')
    // gameOver = true;
    break;
    }
};




