import React, {useContext, useState} from 'react'
import NoteContext from "../context/notes/NoteContext"
import './AddNote.css';
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
        <div className="container mt-3" >
            <h2 className="text-center heading">Add A Note</h2>
            <hr className="container" style={{ height: "3px", color: "black" }} />
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><b>Title</b></label>
                    <input type="text" className="addnote-input form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required placeholder = "min 5 characters" /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"><b>Tag</b></label>
                    <input type="text" className="addnote-input form-control" id="tag" name="tag" value={note.tag} onChange={onChange} placeholder="optional" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"><b>Description</b></label>
                    <textarea type="text" className="addnote-input dArea form-control" id="description" name="description" value={note.description} placeholder = "min 5 characters" onChange={onChange} minLength={5} required style={{height:"100px"}}></textarea>
                </div>
                <div className="container text-center">
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn addnote-btn btn-lg " onClick={handleClick} >Add Note</button>
                </div>
            </form>
        </div>
    )
}
