import { pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {

    id: varchar('id', {length: 256} ).notNull().primaryKey(),
    created_at: varchar('created_at', {length: 256}).notNull(), // unix time in string
    username: varchar('username', {length: 256}).notNull(),
    password: varchar('password', {length: 256}).notNull(),
    email: varchar('email', {length: 256}).unique().notNull(),
    full_name: varchar('full_name', {length: 256}).notNull(),
    nick_name: varchar('nick_name', {length: 256}).notNull(),
    token: varchar('token', {length: 256})

})

