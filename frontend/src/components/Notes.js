import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from "../context/notes/NoteContext"
import { NoteItem } from './NoteItem';
import { useHistory } from 'react-router-dom';
import './Notes.css';

export const Notes = (props) => {
    const context = useContext(NoteContext);
    let history = useHistory();
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }
        else{
            history.push("/login");
        }
        // eslint-disable-next-line
    }, [])
    const refEdit = useRef();
    const refView = useRef();
    const refCloseAfterEdit = useRef();
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

    const updateNote = (currentNote) => {
        refEdit.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
        
    }

    const viewNote = (currentNote) => {
        refView.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }

    const handleClick = (e) => {
        console.log("Updating the note...", note);
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refCloseAfterEdit.current.click();
        props.showAlert("Updated Successfully","success");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <>
            

            {/* Edit Note reference*/}
            <button ref={refEdit} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><b>Edit Note</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label"><b>Title</b></label>
                                    <input type="text" className="details form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" minLength={5} required onChange={onChange} placeholder = "min 5 characters"  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label"><b>Tag</b></label>
                                    <input type="text" className="details form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label"><b>Description</b></label>
                                    <textarea type="text" className="details dArea form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required style={{ height: "100px" }} placeholder = "min 5 characters" ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refCloseAfterEdit} type="button" className="btn  btn-close-footer" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-update">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>



            {/* View Note reference*/}
            <button ref={refView} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModalView">
                Launch
            </button>
            <div className="modal fade" id="exampleModalView" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><b>Your Note</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label"><b>Title</b></label>
                                    <input type="text" className="details form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" disabled />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label"><b>Tag</b></label>
                                    <input type="text" className="details form-control" id="etag" name="etag" value={note.etag} disabled />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label"><b>Description</b></label>
                                    <textarea type="text" className="details dArea form-control" id="edescription" name="edescription" value={note.edescription} minLength={5} required disabled style={{ height: "100px" }}></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-close-footer" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Printing NoteItems */}
            <h2 className='heading'>Your Notes </h2>
            <hr className="container" style={{ height: "3px", color: "black" }} />
            <div className="row mt-1 displayItem">
                <div className="container" >
                    {notes.length === 0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} viewNote={viewNote} note={note} />
                })}
            </div>
        </>
    )
}
