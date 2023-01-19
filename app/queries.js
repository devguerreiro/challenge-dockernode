import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "dbpass",
  database: "app",
});

export function setup() {
  try {
    connection.connect();

    connection.query(
      "CREATE TABLE IF NOT EXISTS People(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, PRIMARY KEY (id));"
    );

    console.log("Setup realizado com sucesso!");
  } catch (err) {
    console.warn("Ocorreu algum erro ao realizar o setup");
  }
}

export function createPerson(name) {
  connection.query(
    "INSERT INTO People SET name=?",
    name,
    function (err, results) {
      if (err) {
        console.log(err);
      } else {
        console.log("INSERT realizado com sucesso", results);
      }
    }
  );
}

export async function getPeople() {
  return new Promise(function (resolve) {
    connection.query("SELECT name FROM People", function (err, results) {
      if (err) {
        console.log(err);
      } else {
        resolve(results);
      }
    });
  });
}

export default {};
