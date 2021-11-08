import React from 'react'

export const ViewNote = (props) => {
    const {note} = props;
    return (
        <>

<div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><b>Title</b></label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title}  minLength={5} disabled /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"><b>Tag</b></label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag}  minLength={5} disabled />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"><b>Description</b></label>
                    <textarea type="text" className="form-control" id="description" name="description" value={note.description}  minLength={5} disabled style={{height:"200px"}}></textarea>
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" >Add Note</button>
            </form>
        </div>
        </>
    )
}
