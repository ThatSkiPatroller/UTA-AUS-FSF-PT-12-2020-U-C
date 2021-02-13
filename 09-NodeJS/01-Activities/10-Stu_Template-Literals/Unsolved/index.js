// music should be an object with title, artist, and album properties
const music = {
  title: 'Congratulations',
  artist: 'Mac Miller',
  album: 'Watching Movies with the Sound Off'
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
  The title of this song is ${music.title} and was created by ${music.artist} from his album ${music.album}
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

