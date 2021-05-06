
function generateTeamHtml(teamMember) {
  let htmltop =
    `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="./Style.css" />
    </head>
    <body>
    <header>
      <p id="header_text">My Team</p>
    </header>
    <div class="percent">
      <section id="Card_container_block">`;

  const htmlBottom =
    `</section>
  </div>
  <footer>
    <p>© Chris Onions</p>
  </footer>
</body>
</html>`;

  const team = teamMember.length
  for (let i = 0; i < team; i++) {
    switch (teamMember[i].role) {//.get_Role
      case 'Manager': manager =
        `<div class="card_block">
      <h3 class="card_name">
        <b>${teamMember[i].userName}</b>
        <br />
        <b>${teamMember[i].role}</b>
      </h3>
      <p class="card_id"> ID : ${teamMember[i].employeeId}</p>
      <a class="card_email" href="mailto:${teamMember[i].emailAdress}">Email  : ${teamMember[i].emailAdress}</a>
      <p class="office_number">Office number : ${teamMember[i].officeNumber}</p>
    </div>`
        htmltop += manager
        break

      case 'Intern': intern =
        `<div class="card_block">
      <h3 class="card_name">
        <b>${teamMember[i].userName}</b>
        <br />
        <b>${teamMember[i].role}</b>
      </h3>
      <p class="card_id">ID : ${teamMember[i].employeeId}</p>
      <a class="card_email" href="mailto:${teamMember[i].emailAdress}">Email : ${teamMember[i].emailAdress}</a>
      <p class="school_name">School : ${teamMember[i].school}</p>
    </div>`
        htmltop += intern
        break

      case 'Engineer': engineer =
        `<div class="card_block">
    <h3 class="card_name">
      <b>${teamMember[i].userName}</b>
      <br />
      <b>${teamMember[i].role}</b>
    </h3>
    <p class="card_id">ID : ${teamMember[i].employeeId}</p>
    <a class="card_email" href="mailto:${teamMember[i].emailAdress}">Email : ${teamMember[i].emailAdress}</a>
    <a class="github_name" href="${teamMember[i].github}">GitHub : ${teamMember[i].github}</a>
  </div>`
        htmltop += engineer
        break
      default: console.log("An error has occured adding employee");
    }
  }
  htmltop += htmlBottom
  return htmltop
}


module.exports = generateTeamHtml