import React, {useContext, useState} from 'react'
import NoteContext from "../context/notes/NoteContext"

export const AddNote = (props) => {
    const context = useContext(NoteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""});
        props.showAlert("Added Successfully","success");
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="mainAddNote container mt-4" >
            <h2 className="text-center">Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><b>Title<b style={{color:"red"}}>*</b></b></label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required placeholder = "min 5 characters" /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"><b>Tag</b></label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"><b>Description<b style={{color:"red"}}>*</b></b></label>
                    <textarea type="text" className="form-control" id="description" name="description" value={note.description} placeholder = "min 5 characters" onChange={onChange} minLength={5} required style={{height:"100px"}}></textarea>
                </div>
                <div className="container text-center">
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-outline-info btn-lg " onClick={handleClick} >Add Note</button>
                </div>
            </form>
        </div>
    )
}
