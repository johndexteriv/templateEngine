const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// Empty array created to push employee objects into
const employees = [];
// First prompt that is called when application is run
const promptManager = () => {
	return inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "What is your Managers name?",
		},
		{
			type: "input",
			name: "id",
			message: "What is your Managers ID?",
		},
		{
			type: "input",
			name: "email",
			message: "What is your Managers Email?",
		},
		{
			type: "input",
			name: "phone",
			message: "What is your Managers office number?",
		},
	]);
};
// Called if Engineer is selceted from promptRole
const promptEngineer = () => {
	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is your Engineers name?",
			},
			{
				type: "input",
				name: "id",
				message: "What is your Engineers ID?",
			},
			{
				type: "input",
				name: "email",
				message: "What is your Engineer Email?",
			},
			{
				type: "input",
				name: "github",
				message: "What is your Engineers GitHub?",
			},
		])
		.then((answers) => {
			// Creates new Engineer based off answers
			// and pushes to employees array
			var engineer = new Engineer(
				answers.name,
				answers.id,
				answers.email,
				answers.github
			);
			employees.push(engineer);
			promptRole();
		});
};
// Called if Intern is selected from promptRole
const promptIntern = () => {
	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is your Interns name?",
			},
			{
				type: "input",
				name: "id",
				message: "What is your Interns ID?",
			},
			{
				type: "input",
				name: "email",
				message: "What is your Interns Email?",
			},
			{
				type: "input",
				name: "school",
				message: "What is your Interns school?",
			},
		])
		.then((answers) => {
			// Creates new Intern based off answers
			// and pushes to employees array
			var intern = new Intern(
				answers.name,
				answers.id,
				answers.email,
				answers.school
			);
			employees.push(intern);
			promptRole();
		});
};
// Asks user if they'd like to add Engineer, Intern or exit.
// Based off user choice, run one of three functions.
const promptRole = () => {
	return inquirer
		.prompt([
			{
				type: "list",
				name: "role",
				message: "Which type of team member would you like to add?",
				choices: [
					"Engineer",
					"Intern",
					"I don't want to add any more team members",
				],
			},
		])
		.then((answers) => {
			// Call promptEngineer()
			if (answers.role == "Engineer") {
				promptEngineer();
				// Call promptIntern()
			} else if (answers.role == "Intern") {
				promptIntern();
			} else {
				// Else write html file with employees array
				console.log(employees);
				const html = render(employees);
				return fs.writeFile("./output/team.html", html, function (err) {
					if (err) {
						console.log("AN ERROR HAS OCCURRED");
					} else {
						console.log("YOUR WEBPAGE HAS BEEN GENERATED");
					}
				});
			}
		});
};
// When application is run call promptManager()
promptManager().then((answers) => {
	// Assign a variable to new Manager object based off prompt answers, then push to employees array
	var manager = new Manager(
		answers.name,
		answers.id,
		answers.email,
		answers.phone
	);
	employees.push(manager);
	// Call promptRole()
	promptRole();
});
