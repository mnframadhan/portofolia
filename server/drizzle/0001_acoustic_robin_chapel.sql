ALTER TABLE "testusers" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "testusers" ALTER COLUMN "id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "testusers" ADD COLUMN "username" varchar(256);