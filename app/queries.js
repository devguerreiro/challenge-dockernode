import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

export async function setup() {
  return new Promise(function (resolve, reject) {
    try {
      connection.connect();

      connection.query(
        "CREATE TABLE IF NOT EXISTS People(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, PRIMARY KEY (id));"
      );

      console.log("Setup realizado com sucesso!");
      resolve();
    } catch (err) {
      console.warn("Ocorreu algum erro ao realizar o setup");
      reject();
    }
  });
}

export async function createPerson(name) {
  return new Promise(function (resolve) {
    connection.query("INSERT INTO People SET name=?", name, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log(`INSERT realizado com sucesso: ${name}`);
        resolve();
      }
    });
  });
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
