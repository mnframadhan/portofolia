import { pgTable, varchar } from "drizzle-orm/pg-core";

export const testUser = pgTable('testusers', {
    id: varchar('id', {length: 256}).primaryKey(),
    username: varchar('username', {length: 256}),
    phone: varchar('phone', {length: 256}),
    avatar: varchar('avatar', {length: 256}),
});

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

