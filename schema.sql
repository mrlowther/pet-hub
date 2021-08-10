DROP DATABASE IF EXISTS pets_db;

CREATE DATABASE pets_db;

-- USE pets_db;

-- CREATE TABLE owners(
--     id INT AUTO_INCREMENT NOT NULL,
--     userName VARCHAR(255),
--     email VARCHAR(255),
--     petName VARCHAR(255),
--     preferredPark VARCHAR(255),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
--     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
--     PRIMARY KEY (ID) 
-- );

-- CREATE TABLE friend(
--     id INT AUTO_INCREMENT NOT NULL,
--     petName VARCHAR(255),
--     animalType VARCHAR(255),
--     animalBreed VARCHAR(255),
--     animalSize VARCHAR(255),
--     animalTemperament VARCHAR(255),
--     activityLevel VARCHAR(255),
--     playsWithOthers VARCHAR(255),
--     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
--     updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
--     PRIMARY KEY (ID)
-- );