const { DataSource } = require('typeorm');
const School = require("./entity/School");


const datasource = new DataSource({
    type: "sqlite",
    database: "./schools.db.sqlite",
    synchronize: true,
    entities: [School],
    logging: ["query", "error"],
})

module.exports = datasource;