DROP DATABASE IF EXISTS history;

CREATE DATABASE history;

USE history;

CREATE TABLE websites (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(200) NOT NULL UNIQUE,
  status varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
