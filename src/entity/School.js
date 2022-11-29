const { EntitySchema } = require("typeorm");


module.exports = new EntitySchema({
    name: "School",
    columns: {
        id: {
            primary: true,
            type : "int",
            generate: true
        },
        name: {
            type: "text",
        },
        stargazers_count: {
            type: "int"
        }
    }
})