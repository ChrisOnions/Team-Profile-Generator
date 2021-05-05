const fs = require('fs');
const inquirer = require("inquirer");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");


function generateTeamHtml(Team) {
  const htmltop =
    `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="./Template.css" />
    </head>
    <body>
    <header>
      <p id="header_text">My Team</p>
    </header>
    <div class="percent">
      <section id="Card_container_block">`

  const htmlBottom =
    `</section>
  </div>
  <footer>
    <p>© Chris Onions</p>
  </footer>
</body>
</html>`

  Team.forEach(teamMember => {
    switch (teamMember) {
      case 'Manager': Manager =
        `<div class="card_block">
      <h3 class="card_name">
        <b>${teamMember.employeeName}</b>
        <br />
        <b>Engineer</b>
      </h3>
      <p class="card_id"> ID : ${teamMember.employeeId}</p>
      <a class="card_email">Email : ${teamMember.email}</a>
      <p class="office_number">Office number : ${teamMember.officeNumber}: 1</p>
    </div>`
        htmltop += Manager
        break
      case 'Intern': Intern =
        `<div class="card_block">
      <h3 class="card_name">
        <b>${teamMember.employeeName}</b>
        <br />
        <b>Engineer</b>
      </h3>
      <p class="card_id">ID : ${teamMember.employeeId}</p>
      <a class="card_email">Email : ${teamMember.email}</a>
      <p class="school_name">School : ${teamMember.schoolName}}</p>
    </div>`
        htmltop += Intern
        break
      case 'Engineer': Engineer =
        `<div class="card_block">
    <h3 class="card_name">
      <b>${teamMember.employeeName}</b>
      <br />
      <b>Engineer</b>
    </h3>
    <p class="card_id">ID : ${teamMember.employeeId}</p>
    <a class="card_email">Email : ${teamMember.email}</a>
    <p class="github_name">GitHub : ${teamMember.github}</p>
  </div>`
        htmltop += Engineer
        break
      default: console.log("An error has occured adding employee");
    }
    htmltop += htmlBottom
  });

  return generateTeamHtml
}

