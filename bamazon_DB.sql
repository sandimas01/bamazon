DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE inventory (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL(100,2) DEFAULT 0,
    stock_quantity INTEGER(100) DEFAULT 0,
    PRIMARY KEY (id)
);

INSERT INTO inventory (product_name, department_name, price, stock_quantity)
VALUES ("vanilla", "ice cream", 2.50, 100), ("chocolate", "candy", 3.10, 120), ("strawberry", "fruit", 3.25, 75);