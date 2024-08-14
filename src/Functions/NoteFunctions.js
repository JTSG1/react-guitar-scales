
const scale_sequence = {
    "major": [0, 2, 4, 5, 7, 9, 11],
    "minor": [0, 2, 3, 5, 7, 8, 10],
    "melodic-minor": [0, 2, 3, 5, 7, 9, 11],
    "harmonic-minor": [0, 2, 3, 5, 7, 8, 11],
    "pentatonic-major": [0, 2, 4, 7, 9],
    "pentatonic-minor": [0, 3, 5, 7, 10],
}

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

const getScale = (rootNote, scale) => {
    let notes_of_scale = [];
    let index_of_root_note = notes.indexOf(rootNote);
    for (let sequence of scale_sequence[scale]) {
        notes_of_scale.push(notes[(index_of_root_note + sequence) % 12]);
    }
    return notes_of_scale;
}

export { getScale, notes, scale_sequence };