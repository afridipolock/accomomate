-- Step 1: Create the database
CREATE DATABASE IF NOT EXISTS accomomate;
USE accomomate;

-- Step 2: Create `users` table
CREATE TABLE `users` (
  `key` INT(20) NOT NULL AUTO_INCREMENT,
  `id` VARCHAR(100) NOT NULL,
  `username` VARCHAR(100) NOT NULL,
  `firstname` VARCHAR(100) DEFAULT '0',
  `lastname` VARCHAR(100) DEFAULT '0',
  `password` VARCHAR(100) DEFAULT '0',
  `usertype` ENUM('landlord','renter','employee'),
  `isowner` TINYINT(4) DEFAULT 0,
  `dob` VARCHAR(50) DEFAULT '0',
  `email` VARCHAR(50) DEFAULT '0',
  `phone` VARCHAR(50) DEFAULT '0',
  `nid` VARCHAR(50) DEFAULT NULL,
  `address` MEDIUMTEXT,
  `gender` ENUM('male','female','other') DEFAULT NULL,
  `status` ENUM('active','inactive','hold','disable') DEFAULT 'hold',
  `profilepic` MEDIUMTEXT DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `last_update` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_key` (`key`),
  UNIQUE KEY `unique_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Step 3: Create `properties` table
CREATE TABLE `properties` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `ownerid` VARCHAR(100) NOT NULL,
  `adtitle` VARCHAR(100),
  `price` DECIMAL(10,2) DEFAULT '0.00',
  `types` ENUM('whole', 'shared'),
  `tenure` ENUM('short', 'long', 'freehold'),
  `feature` LONGTEXT,
  `availability` ENUM('available', 'soon', 'not'),
  `beds` VARCHAR(20),
  `bath` VARCHAR(20),
  `description` MEDIUMTEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `last_update` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_property_id` (`id`),
  CONSTRAINT `fk_owner_user`
    FOREIGN KEY (`ownerid`) REFERENCES `users`(`id`)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Step 4: Create `properties_image` table
CREATE TABLE `properties_image` (
  `id` INT(20) NOT NULL AUTO_INCREMENT,
  `propid` INT(11) NOT NULL,
  `image` LONGTEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `last_update` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_image_id` (`id`),
  CONSTRAINT `fk_property_image`
    FOREIGN KEY (`propid`) REFERENCES `properties`(`id`)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
