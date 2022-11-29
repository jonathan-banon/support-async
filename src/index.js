const db = require("./db");
const fetch = require('node-fetch');
const School = require("./entity/School");


const start = async (url) => {
    await db.initialize();
    const res = await fetch(url);
    const resJson = await res.json();

    const items = resJson.items.map((item) => {

        const {id, name , stargazers_count} = item;
        return {id, name , stargazers_count}
    })
    const bdd = await db
    .getRepository(School)
    .save(items)
}

start("https://api.github.com/search/repositories?q=stars:%3E1&sort=stars");
