DROP DATABASE IF EXISTS top_songsDB;
CREATE database top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

CREATE TABLE albums (
    position INT NOT NULL,
    artist VARCHAR(100) NULL,
    album VARCHAR(100) NULL,
    year INT NULL
);

SELECT * FROM top5000;
SELECT * FROM albums;

USE top_songsdb;

SELECT top5000.position, top5000.artist, top5000.song, top5000.year, albums.album
FROM top5000
INNER JOIN albums ON  top5000.artist = albums.artist AND top5000.year = albums.year;

// answer
SELECT albums.year, albums.album, albums.position, top5000.song, top_albums.artist
FROM top_albums INNER JOIN top5000
ON (top_albums.artist = top5000.artist AND albums.year = top5000.year)
WHERE (albums.artist = "Queen" AND top5000.artist = "Queen")