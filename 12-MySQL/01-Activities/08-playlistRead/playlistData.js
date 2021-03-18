const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'Tdragon9!',
  database: 'playlist_DB',
});

const queryAllSongs = () => {
    connection.query('SELECT * FROM songs', (err, res) => {
        if (err) throw err;
        res.forEach(({ id, title, artist, genre}) => {
            console.log(`id: ${id} title: ${title} artist: ${artist} genre: ${genre}`)
        });
    });
};

const queryRockSongs = () => {
    connection.query('SELECT * FROM songs WHERE genre =?', ['Rock'], (err, res) => {
        if (err) throw err;
        res.forEach(({ id, title, artist, genre}) => {
            console.log(`id: ${id} title: ${title} artist: ${artist} genre: ${genre}`)
        });
    });
};

const afterConnection = () => {
  connection.query('SELECT * FROM songs WHERE `artist` = "Mac Miller"', (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  queryAllSongs();
  queryRockSongs();
  afterConnection();
});
