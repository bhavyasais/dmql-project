const { Pool } = require("pg");

//const Pool = require("pg").Pool;

const pool= new Pool({
    user: "postgres",
    password:"Lionking75@",
    host: "localhost",
    port: 5432,
    database: "dmql"
});

module.exports= pool;
