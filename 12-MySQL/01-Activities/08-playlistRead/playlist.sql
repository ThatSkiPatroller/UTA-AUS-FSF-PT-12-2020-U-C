DROP DATABASE IF EXISTS playlist_DB;

CREATE DATABASE playlist_DB;

USE playlist_DB;

CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NULL,
    artist VARCHAR(45) NULL,
    genre VARCHAR(45) NULL,
    PRIMARY KEY (id)
)

INSERT INTO songs (title, artist, genre)
VALUES ("Cinderella", "Mac Miller", "Rap");

INSERT INTO songs (title, artist, genre)
VALUES ("Western Skyline", "Bob Vance", "Country");

INSERT INTO songs (title, artist, genre)
VALUES ("Dancefloor Anthem", "The Get Down", "Rock");