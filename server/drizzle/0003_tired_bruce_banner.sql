CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"created_at" varchar(256),
	"username" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"full_name" varchar(256) NOT NULL,
	"nick_name" varchar(256) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
