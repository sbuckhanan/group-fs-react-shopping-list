-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "items" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80) NOT NULL,
	"quantity" DECIMAL(6,2) NOT NULL,
	"unit" VARCHAR(20),
    "purchased" BOOLEAN DEFAULT 'false'
);

--Name - text, allow up to 80 characters (required)
--Quantity - allow for decimal numbers (required)
--Unit - text, allow up to 20 characters (optional)

