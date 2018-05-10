#!/usr/bin/env node

const program = require("commander");
const shell   = require("shelljs");

program
    .version("2018.5.0")
    .command('build')
    .option('-d, --development', 'Build development')
    .option('-p, --production', 'Build production')
    .action((opt, argv) => {
        shell.exec(`$(pwd)/node_modules/.bin/webpack --mode=${opt.production ? "production" : "development"}`);
    });

program.parse(process.argv);
