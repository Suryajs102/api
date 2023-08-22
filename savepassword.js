const fs = require("fs");
const path = require("path");
const Os = require("os");
const chalk = require("chalk");

const savepassword = (password) => {
    fs.open(
        path.join(__dirname, "../", "passwords.txt"),
        "a",
        666,
        (Event,id) => {
            fs.write(id,password + Os.EOL,null, "utf-8",() =>{
                fs.close(id, () => {
                    console.log(chalk.red("password saved to password.txt"));
                });
          });
        }
    );
};

module.exports = savepassword;