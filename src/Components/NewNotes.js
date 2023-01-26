import './NewNotes.css'
import NotesForm from './NotesForm'

function NewNotes(props){
    function newNoteHandler(noteObj){
        console.log('newnotehandler')
        props.onNewNoteReturn(noteObj);
    }
    return(
        <div className='new-notes-container'>
            <NotesForm onNewNote={newNoteHandler}></NotesForm> 
        </div>
    );
}

export default NewNotes;
