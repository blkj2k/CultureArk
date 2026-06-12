CREATE TABLE `daily_usage` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`usageDate` date NOT NULL,
	`chatCount` int NOT NULL DEFAULT 0,
	CONSTRAINT `daily_usage_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `role` enum('user','admin','investor') NOT NULL DEFAULT 'user';--> statement-breakpoint
ALTER TABLE `users` ADD `canLogin` boolean DEFAULT false NOT NULL;