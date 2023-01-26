import { useState } from 'react';

import './Notes.css'
import NewNotes from './NewNotes';
import AllNotes from './AllNotes';
import Filter from './filterNotes';


function Notes(props){
    const notesDummy = [{
        date: new Date().getFullYear(),
        title: '',
        note: ''
      }]
      
    const [notes, setNotes] = useState(notesDummy);

    function newNotesChangeHandler(noteObj){
        setNotes(prevState =>{return[noteObj, ...prevState]})
    }
    return(
        <div className='notes-container'>
            <Filter notes={notes} />
            <NewNotes onNewNoteReturn={newNotesChangeHandler} />
            
            {notes.map(notes => <AllNotes
                    title= {notes.title}
                    date = {notes.date}
                    note = {notes.note}
            />)}
            
        </div>
    )
}

export default Notes;
