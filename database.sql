-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "items" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80) NOT NULL,
	"quantity" DECIMAL(6,2) NOT NULL,
	"unit" VARCHAR(20)
);

--Name - text, allow up to 80 characters (required)
--Quantity - allow for decimal numbers (required)
--Unit - text, allow up to 20 characters (optional)

INSERT INTO "items" 
	("name", "quantity", "unit")
VALUES 
	('Apples', 5, 'lbs'),
	('Bread', 1, 'loaf'),
	('Milk', 1, 'gallon'),
	('Sliced Almonds', 2, 'cups'),
	('Bananas', 1, 'bunch');