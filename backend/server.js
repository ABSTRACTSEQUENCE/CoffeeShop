import { stdin } from "node:process";
import { ErrorHandler } from "./errorHandler.js";
import * as rl from "node:readline";
import sqlite3 from "sqlite3";
import { checkPrimeSync } from "node:crypto";
const readline = rl.createInterface(stdin);
class Coffee {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
new Promise((res) => {
  res(new sqlite3.Database("./database/db.db", ErrorHandler.dbOpenError));
}).then(
  (db) => {
    function callMainMenu() {
      const OPTION_NUMBERS = {
        ADD_COFFEE: 1,
        SHOW_ALL_COFFEES: 2,
        CLOSE_DB: 3,
      };
      const options = [
        `${OPTION_NUMBERS.ADD_COFFEE}) Add coffee`,
        `${OPTION_NUMBERS.SHOW_ALL_COFFEES}) Show all coffees`,
        `${OPTION_NUMBERS.CLOSE_DB}) Shutdown connection and exit`,
      ];
      console.log(`MENU`);
      options.forEach((op) => {
        console.log(`${op}`);
      });
      readline.prompt();
      readline.on("line", (input) => {
        switch (parseInt(input)) {
          case OPTION_NUMBERS.SHOW_ALL_COFFEES:
            db.all("SELECT * FROM Coffee", function (err, rows) {
              if (err) {
                ErrorHandler.invalidQueryError(err);
                return;
              }
              if (rows) {
                console.log("Result: ", rows);
                return rows;
              } else console.warn("Empty table");
            });
            break;
          case OPTION_NUMBERS.ADD_COFFEE:
            callInterfaceAddCoffee(new Coffee("Латте", 3000));
            break;
          case OPTION_NUMBERS.CLOSE_DB:
            readline.close();
            db.close(ErrorHandler.dbCloseError);
            break;
        }
      });
    }
    function callInterfaceAddCoffee(coffee) {
      if (Object.prototype.toString.call(coffee) === "[object Object]") {
        db.run(
          `INSERT INTO Coffee VALUES (${(coffee.name, coffee.price)}`,
          class Coffee {
            constructor(name, price) {
              this.name = name;
              this.price = price;
            }
          },
          ErrorHandler.invalidQueryError
        );
      } else
        return console.error("Non object passed to callInterfaceAddCoffee");
    }
    callMainMenu();
  },
  (err) => console.error(err)
);
