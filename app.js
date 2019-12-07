const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
//const generateHTML = require("./output/generateHTML");
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const team = [];

const newEmployee = () => {
    inquirer
     .prompt([
         {
             type: "input",
             message: "ID:",
             name: "id"
         },
         {
            type: "input",
            message: "Name:",
            name: "name"
          },
          {
            type: "input",
            message: "Role:",
            name: "role"
          },
          {
            type: "input",
            message: "Email:",
            name: "email"
          }
     ])
     .then(async function(data) {
         switch (data.role) {
             case "Manager":
                 await inquirer
                 .prompt([
                     {
                       type: "input",
                       message: "I see" + data.name + "is a manager. What is their office number?",
                       name: "office"
                     }
                ])
         }
     });
}