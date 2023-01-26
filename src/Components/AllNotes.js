import './AllNotes.css';


function AllNotes(props){
    console.log(props.date + "  date check")
    console.log(props.year + "  year check")
    

    console.log("Inside all notes");
    return(
        <div className='all-notes-container'>
            {/* <h1>{props.title}</h1>
            <h5>{props.date}</h5>
            <p>{props.note}</p> */}

            {props.year === new Date(props.date).getFullYear()? 
            <div><h1>{props.title}</h1>
            <h5>{props.date}</h5>
            <p>{props.note}</p></div>:
            <p>Nothing</p>
        }
        </div>    
    );
}


export default AllNotes;        