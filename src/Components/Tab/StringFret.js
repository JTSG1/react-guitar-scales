import './Tab.css';

const StringFret = ({ note, index, isNoteOfInterest, isBottomString }) => {
    return <div className={`
            string-fret 
            ${index == 0 ? 'root-note' : ''
        }`}>
        <div className={`
                string-fret 
                ${index == 0 ? 'root-note' : ''
                } ${isNoteOfInterest(note) ? 'note-of-interest' : ''
            }`}>
            { note}
        </div>
        {
            isBottomString && <div className="string-fret-label">
                [{ index }]
            </div> 
        }
    </div>;
};

export default StringFret;