import './App.css';
import Tab from './Components/Tab/Tab';


function App() {

  const rootNotes = ["E", "A", "D", "G", "B", "E"]

  return (
    <div className="App">
      <div className='top-level-container'>
        <h1 style={{ textAlign: "center" }}>Interactive Scales</h1>
        <div style={{ textAlign: "center" }}>
          A simple React app to visualize scales on a guitar fretboard. Created as a learning exercise but also turned out to be a pretty nifty tool for guitarists. You can use the controls
          below the fretboard to change the number of frets, the root note of the scale and the scale itself. Enjoy! Will add more scales to the tool over time.
        </div>
        <Tab rootNotes={rootNotes} />
      </div>

      <div className='top-level-container'>

        <h1>Summary of Guitar Scales</h1>
        <table>
          <thead>
            <tr>
              <th>Scale</th>
              <th>Notes</th>
              <th>Mood/Culture</th>
              <th>Well-Known Rock/Metal Songs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Major Scale</td>
              <td>0, 2, 4, 5, 7, 9, 11</td>
              <td>Bright, Happy, Triumphant</td>
              <td>Sweet Child O' Mine - Guns N' Roses</td>
            </tr>
            <tr>
              <td>Natural Minor Scale</td>
              <td>0, 2, 3, 5, 7, 8, 10</td>
              <td>Melancholic, Dramatic</td>
              <td>Nothing Else Matters - Metallica</td>
            </tr>
            <tr>
              <td>Pentatonic Major</td>
              <td>0, 2, 4, 7, 9</td>
              <td>Bright, Uplifting, Simple</td>
              <td>Little Wing - Jimi Hendrix</td>
            </tr>
            <tr>
              <td>Pentatonic Minor</td>
              <td>0, 3, 5, 7, 10</td>
              <td>Gritty, Bluesy, Powerful</td>
              <td>Black Dog - Led Zeppelin</td>
            </tr>
            <tr>
              <td>Blues Scale</td>
              <td>0, 3, 5, ♭6, 7, 10</td>
              <td>Gritty, Expressive, Raw</td>
              <td>Red House - Jimi Hendrix</td>
            </tr>
            <tr>
              <td>Dorian Mode</td>
              <td>0, 2, ♭3, 5, 7, 9, ♭10</td>
              <td>Jazzy, Mellow, Funky</td>
              <td>So What - Miles Davis (Jazz, but often used in Rock)</td>
            </tr>
            <tr>
              <td>Phrygian Mode</td>
              <td>0, ♭2, ♭3, 5, 7, ♭9, ♭10</td>
              <td>Dark, Exotic, Spanish</td>
              <td>Wherever I May Roam - Metallica</td>
            </tr>
            <tr>
              <td>Lydian Mode</td>
              <td>0, 2, 4, #4, 7, 9, 11</td>
              <td>Bright, Dreamy, Mysterious</td>
              <td>Dreams - The Cranberries (used in various genres)</td>
            </tr>
            <tr>
              <td>Mixolydian Mode</td>
              <td>0, 2, 4, 5, 7, 9, ♭10</td>
              <td>Rocking, Funky, Rooted in Blues</td>
              <td>Born To Be Wild - Steppenwolf</td>
            </tr>
            <tr>
              <td>Harmonic Minor</td>
              <td>0, 2, 3, 5, 7, ♭8, 11</td>
              <td>Dramatic, Exotic, Classical Influence</td>
              <td>Painkiller - Judas Priest</td>
            </tr>
            <tr>
              <td>Melodic Minor</td>
              <td>0, 2, 3, 5, 7, 9, 11 (Ascend), 0, 2, ♭3, 5, 7, 9, 11 (Descend)</td>
              <td>Smooth, Jazz Influenced, Sophisticated</td>
              <td>All The Things You Are - Jazz Standard (various covers)</td>
            </tr>
            <tr>
              <td>Locrian Mode</td>
              <td>0, ♭2, ♭3, 5, ♭6, ♭7, 8</td>
              <td>Tense, Dissonant, Unstable</td>
              <td>Less common in rock; used in experimental metal</td>
            </tr>
            <tr>
              <td>Whole Tone Scale</td>
              <td>0, 2, 4, 6, 8, 10</td>
              <td>Ambiguous, Surreal, Floating</td>
              <td>The Rat - King Crimson</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
