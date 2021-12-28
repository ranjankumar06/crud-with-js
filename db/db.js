const mysql = require("mysql");
require('dotenv').config();

// Mysql Connection
var con = mysql.createConnection({
    host: "localhost",//process.env.DB_HOST,
    user: "root",//process.env.DB_USER,
    password: "Vishal@95",//process.env.DB_PASS
    insecureAuth : true
})

con.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("database connected....")
    }
})

// Knex connection
var knex = require('knex')({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATA
    }
});

// // Knex Schema for Create Table
knex.schema.createTable('user', (table) => {
    table.increments('employee_id').primary();
    table.string('FirstName', 255).notNullable()
    table.string('lastName', 255).notNullable()
    table.string('Email', 255).notNullable()
    table.string('Password', 255).notNullable()
    table.string('OrganizationName', 255).notNullable()
}).then((data) => {
    console.log();
}).catch((err) => {
    console.log("The user table is already created ....");
});

module.exports = knex;