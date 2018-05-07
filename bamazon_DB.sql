DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE inventory (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price FLOAT(100) DEFAULT 0,
    stock_quantity INTEGER(10) DEFAULT 0,
    PRIMARY KEY (id)
);

-- INSERT INTO inventory (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);