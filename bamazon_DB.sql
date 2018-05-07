DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE inventory (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL(65,2) DEFAULT 0,
    stock_quantity INTEGER(100) DEFAULT 0,
    PRIMARY KEY (id)
);

INSERT INTO inventory (product_name, department_name, price, stock_quantity)
VALUES 
("vanilla", "ice cream", 2.50, 100),
("chocolate", "candy", 3.10, 120),
("strawberry", "fruit", 3.25, 75),
("liqorish", "candy", 3.99, 80),
("rocky road","ice cream", 6.99, 40),
("apples", "fruit", 2.30, 15),
("snickers", "candy", 2.89, 100),
("bananna", "fruit", 0.69, 500),
("blueberry", "fruit", 0.05, 1000),
("Tesla Roadster", "elecrtomobile", 1000000, 1);
