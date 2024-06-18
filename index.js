#!/usr/bin/env node

const fs = require("node:fs");

const baka = () => {
    console.log("\n");
    console.log("HELLO BAKA WORLD!...hehe...😎");
    console.log("~bakacoder\n");
    console.log("script directory", __dirname);
    console.log("execution directory", process.cwd());
    console.log("\n");
    fs.writeFileSync("ehe.txt", "ehe te nandayo");
}

baka();
process.exit(0);