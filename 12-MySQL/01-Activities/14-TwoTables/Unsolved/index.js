const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: 'Tdragon9!',
    database: 'top_songsdb',
  });

const start = () => {
inquirer.prompt([
    {
        name: "choice",
        type: "list",
        choices: ["Find song by artist", "Return artists who appear in top 1000 more than once", "Return songs within specific range", "Search for a specific song"],
        message: "What would you like to do?",
    }
]).then((answer) => {
    if (answer = "Find song by artist") {
        inquirer.prompt([
            {
                name: "selection",
                type: "input",
                message: "What artist would you like to look for?"
            }
        ]).then((secondA) => {
            connection.query(`SELECT * FROM songs WHERE 'artist' = ${secondA}`, (error, results) => {
                if (error) throw error;
                console.log('Songs by this artist: ', results);
                connection.end();
            });
        })
    }
})
}

  connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
    
    });