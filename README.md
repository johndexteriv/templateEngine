# OOP Homework - Template Engine - Employee Summary

## To Run CLI Application

Install node_modules

```
npm i
```

Run application

```
node app.js
```

## Instructions

You will build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

## User Story

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

### Classes

The project must have the these classes: `Employee`, `Manager`, `Engineer`,
`Intern`.

The first class is an `Employee` parent class with the following properties and
methods:

- name
- id
- email
- getName()
- getId()
- getEmail()
- getRole() // Returns 'Employee'

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have:

- officeNumber

- getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:

- github // GitHub username

- getGithub()

- getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:

- school

- getSchool()

- getRole() // Overridden to return 'Intern'

### User input

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

- Name

- Role

- ID

- Role-specific property (School, link to GitHub profile, or office number)

https://github.com/johndexteriv/templateEngine

![App Gif](./assets/templategif.gif)

![generated page](./assets/generatedpage.png)

![CLI prompt](./assets/prompt.png)
