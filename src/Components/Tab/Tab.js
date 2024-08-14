import './Tab.css';
import TabString from './TabString';
import { useState, useEffect } from 'react';
import { getScale, notes, scale_sequence } from '../../Functions/NoteFunctions';

const Tab = ({ rootNotes }) => {

    const [noOfFrets, setNoOfFrets] = useState(25);
    const [scaleRootNote, setScaleRootNote] = useState("A");
    const [scale, setScale] = useState("pentatonic-major");

    useEffect(() => {
        // This effect runs whenever `noOfFrets` changes.
        console.log(`Number of frets changed to: ${noOfFrets}`);
        
        // If you need to do any additional work when noOfFrets changes, do it here.
    }, [noOfFrets, scaleRootNote]);

    const removeFret = () => {
        if (noOfFrets > 5) {
            setNoOfFrets(noOfFrets - 1);
        }
    }

    const addFret = () => {
        if (noOfFrets < 25) {
            setNoOfFrets(noOfFrets + 1);
        }
    }

    const handleRootNoteChange = (event) => {
        setScaleRootNote(event.target.value);
    };

    const handleScaleChange = (event) => {
        setScale(event.target.value);
    };

    return <div>
        <div className="tab-container">
            {
                rootNotes.slice().reverse().map((rootNote, index, array) => {
                    const isLast = index === array.length - 1;
                    return <TabString noOfFrets={noOfFrets} rootNote={rootNote} scaleNotes={getScale(scaleRootNote, scale)} isLast={ isLast }/>
                })
            }
        </div>
        <div className="controls" style={{ textAlign : 'center' }}>
            <div className='control-group'>
                <span className='control-label'>No of Frets</span>
                <button onClick={ removeFret }>-</button>
                <span>{noOfFrets - 1}</span>
                <button onClick={ addFret }>+</button>
            </div>
            <div className='control-group'>
                <span className='control-label'>Root Note</span>
                <select id="options" value={scaleRootNote} onChange={handleRootNoteChange}>
                    {
                        notes.map((note) => (
                            <option value={note}>{note}</option>
                        ))
                    }
                </select>
            </div>
            <div className='control-group'>
                <span className='control-label'>Scale</span>
                <select id="options" value={scale} onChange={handleScaleChange}>
                    {
                        Object.keys(scale_sequence).map((scaleName) => (
                            <option value={scaleName}>{scaleName}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    </div>;

};

export default Tab;