#!/usr/bin/env node
'use strict'
import boxen from 'boxen';
import chalk from 'chalk';

const intro = chalk.bold.blue('hi, i\'m nico! i write code and stuff.\n\n');
const links = [
    { name: chalk.hex("#fff").bgHex("#839DA9")('github: '), url: ' github.com/nicolajack'},
    { name: chalk.hex("#fff").bgHex("#7B82AA")('website: '), url: ' nicojackson.me'},
    { name: chalk.hex("#fff").bgHex("#8696B7")('linkedin: '), url: ' linkedin.com/in/nicola-jackson-64b22833b/'},
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: '#375574',
    title: 'nico jackson',
    titleAlignment: 'center',
};

console.log(boxen(intro + '\n' + linkList, options));
