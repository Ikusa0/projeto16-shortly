CREATE TABLE "links" (
	"id" serial NOT NULL,
	"url" TEXT NOT NULL,
	"shortUrl" TEXT NOT NULL UNIQUE,
	"visitCount" BIGINT NOT NULL DEFAULT '0',
	"userId" INT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT 'NOW()',
	CONSTRAINT "links_pk" PRIMARY KEY ("id")
);

CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT 'NOW()',
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
);

ALTER TABLE "links" ADD CONSTRAINT "links_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");
