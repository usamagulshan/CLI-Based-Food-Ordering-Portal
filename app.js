import inquirer from "inquirer";
let userName = "usama333";
let pw = 12345;
console.log("FOOD VILLA FOOD PORTAL!");
let login = await inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: "Please Enter Your Username:",
    },
    {
        name: "password",
        type: "number",
        message: "Please Enter Your Password",
    },
]);
if (userName === login.userName && pw === login.password) {
    console.log("Welcome to Food Villa!");
    let m_menu = await inquirer.prompt([
        {
            name: "Menu",
            type: "rawlist",
            message: "What Do you Want to Do?",
            choices: ["Order Foods", "Check our Details", "Close app"],
        },
    ]);
    if (m_menu.Menu === "Order Foods") {
        // console.log("Please Wait")
        let order = await inquirer.prompt([
            {
                name: "food",
                type: "rawlist",
                message: "Which Fast Food Do you like to Order?",
                choices: [
                    "American Fast Foods",
                    "Chinese Fast Foods",
                    "Pakistani Fast Foods",
                ],
            },
        ]);
        if (order.food === "American Fast Foods") {
            let s_menu = await inquirer.prompt([
                {
                    name: "food",
                    type: "rawlist",
                    message: "Please Select the Dish you want to Order:",
                    choices: ["sandwiches", "fried chicken", "pizza", "Hot Dogs"],
                },
            ]);
            if (s_menu.food === "sandwiches") {
                let cart = await inquirer.prompt([
                    {
                        name: "dish1",
                        type: "number",
                        message: "Please Enter Count of Dish you want to Order:",
                    },
                ]);
                if (cart.dish1) {
                    console.log(`Thanks! You Ordered ${cart.dish1} Sandwiches`);
                    console.log("You Order Will be Delivered in 20 to 40 Minutes.");
                }
            }
            if (s_menu.food === "fried chicken") {
                let cart = await inquirer.prompt([
                    {
                        name: "dish2",
                        type: "number",
                        message: "Please Enter Count of Dish you want to Order:",
                    },
                ]);
                if (cart.dish2) {
                    console.log(`Thanks! You Ordered ${cart.dish2} Fried Chicken`);
                    console.log("You Order Will be Delivered in 20 to 40 Minutes.");
                }
            }
            if (s_menu.food === "pizza") {
                let cart = await inquirer.prompt([
                    {
                        name: "dish3",
                        type: "number",
                        message: "Please Enter Count of Dish you want to Order:",
                    },
                    {
                        name: "dish03",
                        type: "list",
                        message: "Please Select Pizza Size you want to Order:",
                        choices: ["Small Pizza", "Large Pizza", "Extra Large Pizza"],
                    },
                ]);
                if (cart.dish3 && cart.dish03) {
                    console.log(`Thanks! You Ordered ${cart.dish3} ${cart.dish03}`);
                    console.log("You Order Will be Delivered in 20 to 40 Minutes.");
                }
            }
            if (s_menu.food === "Hot Dogs") {
                let cart = await inquirer.prompt([
                    {
                        name: "dish4",
                        type: "number",
                        message: "Please Enter Count of Dish you want to Order:",
                    },
                ]);
                if (cart.dish4) {
                    console.log(`Thanks! You Ordered ${cart.dish4} Hot Dogs`);
                    console.log("You Order Will be Delivered in 20 to 40 Minutes.");
                }
            }
        }
        ;
        if (order.food === "Chinese Fast Foods") {
            let s_menu = await inquirer.prompt([
                {
                    name: "food",
                    type: "rawlist",
                    message: "Please Select the Dish you want to Order:",
                    choices: ["kung pao chicken", "Hot Pot", "Dumplings"],
                },
            ]);
            if (s_menu.food === "kung pao chicken") {
                let cart = await inquirer.prompt([
                    {
                        name: "dish1",
                        type: "number",
                        message: "Please Enter Count of Dish you want to Order:",
                    },
                ]);
                if (cart.dish1) {
                    console.log(`Thanks! You Ordered ${cart.dish1} Kung Pao Chicken`);
                    console.log("You Order Will be Delivered in 20 to 40 Minutes.");
                }
            }
            if (s_menu.food === "Hot Pot") {
                let cart = await inquirer.prompt([
                    {
                        name: "dish2",
                        type: "number",
                        message: "Please Enter Count of Dish you want to Order:",
                    },
                ]);
                if (cart.dish2) {
                    console.log(`Thanks! You Ordered ${cart.dish2} Hot Pot`);
                    console.log("You Order Will be Delivered in 20 to 40 Minutes.");
                }
            }
            if (s_menu.food === "Dumplings") {
                let cart = await inquirer.prompt([
                    {
                        name: "dish3",
                        type: "number",
                        message: "Please Enter Count of Dish you want to Order:",
                    },
                ]);
                if (cart.dish3) {
                    console.log(`Thanks! You Ordered ${cart.dish3} Dumplings`);
                    console.log("You Order Will be Delivered in 20 to 40 Minutes.");
                }
            }
        }
    }
}
else {
    console.log("Please Enter Valid Credentials");
}
// Chinese
// Kung Pao Chicken. Kung Pao Chicken. ...
// Sweet and Sour Pork. Sweet and Sour Pork. ...
// Hot Pot. Hot Pot. ...
// Dim Sum. Cantonese Dim Sum. ...
// Dumplings. Dumplings. ...
// Pakistani Foods
// // Some typical snacks are dahi bhala, vutlass (aloo tikki), chaat and samosa chaat,
//  bun kebab, chana masala, chapli kebab, shami kebab, seekh kebab, malai tikka kebab
//  (meat and yogurt), reshami kebab, pakora, and papar.
// American Food
// Common menu items at fast food outlets include fish and chips, sandwiches, pitas, hamburgers,
// fried chicken, french fries, onion rings, chicken nuggets, tacos, pizza, hot dogs, and ice cream
