#! /usr/bin/env node

const shell = require("shelljs");

shell.exec("$(pwd)/node_modules/.bin/webpack");
