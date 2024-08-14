import './Tab.css';
import StringFret from './StringFret';
import { useState } from 'react';
import { notes } from '../../Functions/NoteFunctions';

const TabString = ({ noOfFrets, rootNote, scaleNotes, isLast }) => {

    const range = [...Array(noOfFrets).keys()];
    
    const getRootNoteIndex = () => {
        return notes.indexOf(rootNote);
    }

    const getNote = (number) => {
        return notes[(getRootNoteIndex() + number) % 12];
    }

    const isNoteOfScale = (note) => {
        return scaleNotes.includes(note);
    }

    return <div className="tab-string">
        {range.map((number, index) => (
            <StringFret key={number} note={ getNote(number) } index={number} isNoteOfInterest={isNoteOfScale} isBottomString={ isLast }/>
      ))}
    </div>;

};

export default TabString;