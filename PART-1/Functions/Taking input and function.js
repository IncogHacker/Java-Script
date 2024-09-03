let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pizzahut(pizza, sauce, spicy, cucumber, quantity, butter, oil) {
    console.log("Your Pizza Name is --" + pizza +
        "\nType Of Sauce --" + sauce +
        "\nSpicy YES or NO--" + spicy +
        "\nCucumber YES or NO--" + cucumber +
        "\nQuantity of Pizza--" + quantity +
        "\nButter YES or NO--" + butter +
        "\nOil YES or NO--" + oil);
}

rl.question('Enter Pizza Name: ', function pizzahut(pizza) {
    rl.question('Enter Type Of Sauce: ', (sauce) => {
        rl.question('Is it Spicy (YES or NO): ', (spicy) => {
            rl.question('Add Cucumber (YES or NO): ', (cucumber) => {
                rl.question('Enter Quantity of Pizza: ', (quantity) => {
                    rl.question('Add Butter (YES or NO): ', (butter) => {
                        rl.question('Add Oil (YES or NO): ', (oil) => {
                            pizzahut(pizza, sauce, spicy, cucumber, quantity, butter, oil);
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});
