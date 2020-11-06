const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employees = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Managers ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Managers Email?' 
        },
        {
            type: 'input',
            name: 'phone',
            message: 'What is your Managers office number?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'Which type of team member would you like to add?',
            options: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ])
}

promptUser()
.then(answers => {
    var manager = new Manager(answers.name, answers.id, answers.email, answers.phone)
    employees.push(manager);
    if (answers.role == "Engineer"){
        Engineer()
    } else if (answers.role == "Intern") {
        
    }
});