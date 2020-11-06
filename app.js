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

const promptManager = () => {
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
        }
    ])
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Engineers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Engineers ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Engineer Email?' 
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Engineers GitHub?'
        }
    ])
    .then(answers => {
            var engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            employees.push(engineer);
            promptRole();
        })
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Interns name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Interns ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Interns Email?' 
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your Interns school?'
        }
    ])
    .then(answers => {
        var intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employees.push(intern)
        promptRole();
    })
}

const promptRole = () => {
    return inquirer.prompt([ 
        {
            type: 'list',
            name: 'role',
            message: 'Which type of team member would you like to add?',
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ])
    .then(answers => {
    if (answers.role == "Engineer"){
        promptEngineer();
    } else if (answers.role == "Intern") {
        promptIntern();
    } else {
        const html = render(employees)
        return fs.writeFile(OUTPUT_DIR, html, function (err) {
            if (err) {
                console.log('AN ERROR HAS OCCURRED')
            } else {
                console.log('YOUR WEBPAGE HAS BEEN GENERATED')
            }
        })
    }
    })
}

promptManager()
.then(answers => {
    var manager = new Manager(answers.name, answers.id, answers.email, answers.phone)
    employees.push(manager);
    promptRole();
    
});