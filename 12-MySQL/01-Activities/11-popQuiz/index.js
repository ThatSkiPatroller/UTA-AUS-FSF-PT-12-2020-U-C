const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: 'Tdragon9!',
    database: 'playlist_new',
  });

  const start = () => {

  }

  connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    connection.query('SELECT * FROM songs', (error, results) => {
        if (error) throw error;
        console.log('results: ', results);
        connection.end();
    })
  });