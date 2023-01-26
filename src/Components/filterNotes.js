// import { useState } from 'react';
import './filterNotes.css';
import AllNotes  from './AllNotes';

function FilterNotes(props){
    // const[dates, setDates] = useState(props.date);
    function selectHandler(event){
        console.log(event.target.value);
        <AllNotes year={event.target.value}/>
    }
    return(
       <div className='filter-notes-container'>
         <select onChange={selectHandler}>
            {props.notes.map(d => 
                <option value={new Date(d.date).getFullYear()}>
                    {new Date(d.date).getFullYear()}
                </option>
                )}           
        </select>

       </div>
    );
}

export default FilterNotes; 