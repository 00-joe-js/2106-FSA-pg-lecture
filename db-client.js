const pg = require("pg");
const Client = pg.Client;

// const dbClient = new Client({
//     user: 'joe-alves',
//     password: 'buttons',
//     host: 'localhost',
//     database: 'exercises',
//     port: 5432,
// });

const dbClient = new Client('postgres://joe-alves:buttons@localhost:5432/exercises');

dbClient.connect();

module.exports = dbClient;