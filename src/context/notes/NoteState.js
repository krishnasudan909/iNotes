import { useState } from "react";
import NoteContext  from "./NoteContext";

const NoteState = (props)=>{
    const notesInitial = [
            {
              "_id": "617112bbf527841827a537e0",
              "user": "616ecd7b4262c329c05a642a",
              "title": "My title",
              "description": "Please be consistent",
              "tag": "Personal",
              "timestamp": "2021-10-21T07:11:55.068Z",
              "__v": 0
            },
            {
              "_id": "6173df77b3637c5bed4586dc",
              "user": "616ecd7b4262c329c05a642a",
              "title": "My title 2",
              "description": "Please be consistent 3",
              "tag": "Personal",
              "timestamp": "2021-10-23T10:09:59.354Z",
              "__v": 0
            },
            {
              "_id": "6173df7eb3637c5bed4586de",
              "user": "616ecd7b4262c329c05a642a",
              "title": "My title 2",
              "description": "Please be consistent 3",
              "tag": "Personal",
              "timestamp": "2021-10-23T10:10:06.498Z",
              "__v": 0
            },
            {
              "_id": "6173df80b3637c5bed4586e0",
              "user": "616ecd7b4262c329c05a642a",
              "title": "My title 2",
              "description": "Please be consistent 3",
              "tag": "Personal",
              "timestamp": "2021-10-23T10:10:08.083Z",
              "__v": 0
            }
          ]
        const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;