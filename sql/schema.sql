
DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
	`userID` INT NOT NULL AUTO_INCREMENT,
	`firstName` VARCHAR(255) NOT NULL,
	`middleName` VARCHAR(255) ,
	`lastName` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL,
	`phoneNumber` VARCHAR(255) NOT NULL,
	`streetAddress` VARCHAR(512),
	`city` VARCHAR(255) NOT NULL,
	`state` VARCHAR(255) NOT NULL,
	`zipCode` VARCHAR(255) NOT NULL,
	`username` VARCHAR(255) NOT NULL,
	`password` VARCHAR(255) NOT NULL,
	`createdOn` datetime NOT NULL,
	PRIMARY KEY(`userID`),
	KEY `createdOn_idx` (`createdOn`),
	UNIQUE (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
