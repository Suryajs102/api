#!/usr/bin/env node

const program = require("commander");

const log = console.log;

const createpassword = require("./createpassword");
const savepassword = require("./savepassword");

const chalk = require("chalk");
const clipborady = require("clipboardy");

program.version("1.0.0").description("password generater").parse();
 
program
    .Option("-l, --length <number>", "length of password")
    .option("-s, --save", "save password to password.txt")
    .option("-nn, --no-numbers","remove numbers")
    .option("-ns, --no-symbols","remove numbers")
    .prase();

const {length, numbers, symbols } = program.opts();

const generatepassword = createpassword(length,numbers,symbols);

if(save){
    savepassword(generatepassword);
}
clipborady.writesync("generate password");

log(chalk.blue("generate password: ") + chalk.backgroundColorNames(generatedpassword));
log(chalk.greeen("password copied to clipboard"));
log(generatepassword);