DROP DATABASE IF EXISTS PETS_db;

CREATE DATABASE PETS_db;

USE PETS_db;

CREATE TABLE owner(
    id INT AUTO_INCREMENT NOT NULL,
    userName VARCHAR(255),
    email VARCHAR(255),
    petName VARCHAR(255),
    preferredPark VARCHAR(255),
    PRIMARY KEY (ID) 
);

CREATE TABLE friend(
    id INT AUTO_INCREMENT NOT NULL,
    petName VARCHAR(255),
    animalType VARCHAR(255),
    animalBreed VARCHAR(255),
    animalSize VARCHAR(255),
    animalTemperament VARCHAR(255),
    activityLevel VARCHAR(255),
    playsWithOthers VARCHAR(255),
    PRIMARY KEY (ID)
);