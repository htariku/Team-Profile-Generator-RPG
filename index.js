const pageTemplate = require('./src/pageTemplate')
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");


const team = [];

const addManager = () => {
    return inquirer.prompt ([

        {
            type: "input",
            name: "name",
            message: "What is your managers name?",
            validate: nameInput => {
                if (nameInput){
                return true;
                } else {
             console.log ("Please enter your Manger's name!");
                return false;
            }            
            }
          },
          {
            type: "input",
            name: "id",
            message: "What is your managers id?",
            validate: nameInput => {
                if (isNaN(nameInput)){
            
             console.log ("Please enter your Manger's ID!");
                return false;
            } else {
                return true;
            }
        }
          },
          {
            type: "input",
            name: "email",
            message: "What is your managers Email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter a valid email!')
                    return false; 
                }
            }
          },
          {
            type: "input",
            name: "office",
            message: "What is your managers office number?",
            validate: nameInput => {
                if (isNaN(nameInput)){
            
             console.log ("Please enter an office Number!");
                return false;
            } else {
                return true;
            }
        }
          }
        ])

        .then(managerInput => {
            const  { name, id, email, office} = managerInput; 
            const manager = new Manager (name, id, email, office);
          
            team.push(manager); 
            console.log(manager); 
        })
    };

    const addEmployee = () => {
        console.log(`
        `);
        return inquirer.prompt ([
            {
                    type: "list",
                    name: "role",
                    message: "Choose your employee's role",
                    choices: ['Engineer','Intern']
                  },
                  {
                  type: "input",
            name: "name",
            message: "What is your employee's name?",
            validate: nameInput => {
                if (nameInput){
                return true;
                } else {
             console.log ("Please enter your employee's name!");
                return false;
            }            
            }
          },
                  {
                    type: "input",
                    name: "id",
                    message: "What is your employee's id?",
                    validate: nameInput => {
                        if (nameInput){
                            return true;
                        } else {
                     console.log ("Please enter your employee's ID!");
                        return false;
    
                    }
                }
                  },
                  {
                    type: "input",
                    name: "email",
                    message: "What is your employee's Email?",
                    validate: email => {
                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                        if (valid) {
                            return true;
                        } else {
                            console.log ('Please enter a valid email!')
                            return false; 
                        }
                    }
                  },
                  {
                    type: "input",
                    name: "github",
                    message: "What is your employee's github username?",
                    validate: nameInput => {
                        if (nameInput){
                            return true;
                        } else {
                     console.log ("Please enter employee's github username!");
            
                    }
                }
                  },
                  {
                      type: 'input',
                      name:'school',
                      message: "Please enter the intern's school",
                      when: (input) => input.role === "Intern", 
                      validate: nameInput => {
                          if (nameInput) {
                              return true;
                          } else {
                              console.log ("Please eneter the interm's school!")
                          }
                          }
    
                      },
                    {
                        type: 'confirm',
                        name: 'confirmAddEmployee',
                        messgae: 'Would you like to add more team members?',
                        default: false 
                    }
        ])
    
        .then(employeeData => {
            // data for the differnet types of employees there are  
    
            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
            let employee; 
    
            if (role === "Engineer") {
                employee = new Engineer (name, id, email, github);
    
                console.log(employee);
    
            } else if (role === "Intern") {
                employee = new Intern (name, id, email, school);
    
                console.log(employee);
            }
    
            team.push(employee); 
    
            if (confirmAddEmployee) {
                return addEmployee(team); 
            } else {
                return team;
            }
        })
    
    };
    

        const writeFile = data => {
            fs.writeFile('./dist/index.html', data, err => {
                // what to do when an error is of occurance 
                if (err) {
                    console.log(err);
                    return;
                // what to do when there has been a profile created 
                } else {
                    console.log("Your team profile has successfully been created!")
                }
            })
        }; 
        
        addManager()
          .then(addEmployee)
          .then(teamArray => {
            return pageTemplate(teamArray);
          })
          .then(pageHTML => {
            return writeFile(pageHTML);
          })
          .catch(err => {
         console.log(err);
          });


