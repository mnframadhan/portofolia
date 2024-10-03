import { pgTable, varchar } from "drizzle-orm/pg-core";

export const testUser = pgTable('testusers', {
    id: varchar('id', {length: 256}).primaryKey(),
    username: varchar('username', {length: 256}),
    phone: varchar('phone', {length: 256}),
    avatar: varchar('avatar', {length: 256}),
});


export const users = pgTable('users', {

    

})

