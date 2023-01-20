import express from "express";

import { createPerson, getPeople, setup } from "./queries.js";

const app = express();
const port = 3000;

let setupAlreadyDone = false;

app.get("/:name", async (req, res) => {
  const name = req.params.name;
  if (name !== "favicon.ico") {
    try {
      await createPerson(name);

      res.send(`
      <h1>${name} foi adicionado com sucesso à lista de pessoas cadastradas!</h1>
      <h3><a href="/">Voltar</a></h3>
    `);
    } catch (err) {
      res.send(`
      <h1>Nao foi possivel adicionar ${name} à lista de pessoas cadastradas!</h1>
    `);
    }
  }
});

app.get("/", async (req, res) => {
  if (!setupAlreadyDone) {
    await setup();
    setupAlreadyDone = true;
  }

  const people = await getPeople();

  const peopleList = people.reduce((acc, person) => {
    acc += `<ul>${person.name}</ul>`;
    return acc;
  }, "");

  if (people.length > 0) {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ul>${peopleList}</ul>
    `);
  } else {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <h3>Parece que voce nao cadastrou ninguem ainda... experimente acessar "/algum_nome"</h3>
    `);
  }
});

app.listen(port);
