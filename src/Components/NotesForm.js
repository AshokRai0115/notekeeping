import { useState } from 'react';
import './NotesForm.css';
function NotesForm(props){
    const [notes, setNotes] = useState({
        title: '',
        note: '',
        date: ''
    });
    function dateChangeHandler(event){
        setNotes(prevState => {return({
           ...prevState, 
           date: event.target.value, 
        })})
    }
    function titleChangeHandler(event){
        setNotes(prevState=>{
            return({
                ...prevState, 
                title: event.target.value
            })
        })
    }
    function noteChangeHandler(event){
        setNotes(prevState =>{
            return({
                ...prevState, 
                note: event.target.value,
            })
        })
    }

    const notesCollection={
        title: notes.title,
        note: notes.note,
        date: notes.date
    }
    
    function formHandler(event){
        event.preventDefault();
        props.onNewNote(notesCollection);


    }
    return(
            <form className='form-container' onSubmit={formHandler}>
                <input type='date' className='date' onChange={dateChangeHandler}></input>
                <input type='text' placeholder='title' className='title' onChange={titleChangeHandler}></input>
                <textarea type='textarea' placeholder='Note' className='note' onChange={noteChangeHandler}></textarea>
                <button type='submit' className='create'>Create Note</button>
            </form>
    );
}

export default NotesForm;
