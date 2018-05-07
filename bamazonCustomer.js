var mysql = require("mysql");
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "In$iderO1",
  database: "bamazon_DB"
});


function displayTable (res) {
  var table = new Table({
    head: ['Id', 'Product Name', 'Department', 'Price', 'In Stock']
    , colWidths: [10, 60, 30, 10, 10]
  });
  
  for (var i = 0; i < res.length; i++) {

    table.push(
      [res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]        
  );
}       
  console.log(table.toString());
}



connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  purchaseStart();
});

function purchaseStart() {
  connection.query("SELECT * FROM bamazon_db.inventory", function(err, res) {
      if (err) throw err;
      displayTable (res);

          var choiceArray = [];
          for (var i = 0; i < res.length; i++) {
            choiceArray.push(res[i].product_name);
          }
          inquirer.prompt([{
            name: 'item',
            type: 'input',
            message: 'Which item would you like to purchase? (Enter the Item ID)'
          },
          {
            name: 'quantity',
            type: 'input',
            message: 'Purchase amount?'
          }])

          .then(function(answer) {            
            var id = answer.item;            
            var chosenItem = res[id-1];
            var newQuantity = chosenItem.stock_quantity - answer.quantity;
            var price = chosenItem.price;
            var totalPrice = price * answer.quantity;
            if (newQuantity >= 0) {
              connection.query('UPDATE inventory SET ? WHERE id = ?', [{ stock_quantity: newQuantity }, id]);
              console.log('--------------------------------------------');
              console.log("Your tolal purchase of " + chosenItem.product_name + " is $" + totalPrice )
              console.log('Thank you for shopping Bamazon!!!')
              console.log('--------------------------------------------');

              connection.end();

            } else {
              console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
              console.log('Sorry, inventory is low.');
              console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
              connection.end();
            }
          })
  });
}

