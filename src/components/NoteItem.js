import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="card-header">
            <div className="d-flex align-items-baseline">
              <h5 className="card-title flex-grow-1">{note.title}</h5>

              <i
                className="fa-regular fa-trash-can mx-2 p-1"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Deleted Note Successfully", "success");
                }}
              ></i>
              <i
                className="fa-solid fa-pencil mx-2 p-1 "
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </div>
            <span className="badge rounded-pill text-bg-dark">{note.tag}</span>
          </div>

          <p className="card-text my-4">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
