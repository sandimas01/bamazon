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

connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM bamazon_db.inventory", function(err, res) {
      if (err) throw err;


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

    connection.end();
  });
}