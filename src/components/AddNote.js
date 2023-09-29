import React, { useContext, useState, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  useEffect(() => {
    // Initialize Bootstrap popover
    const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new window.bootstrap.Popover(popoverTriggerEl);
    });

    return () => {
      // Cleanup when the component unmounts
      popoverList.forEach((popover) => {
        popover.dispose();
      });
    };
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Note Successfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3 mt-5">
      <h1 className="mb-3">Add a note</h1>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            aria-describedby="emailHelp"
            onChange={onChange}
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>
        <span
          className="d-inline-block"
          tabIndex="0"
          data-bs-toggle="popover"
          data-bs-trigger="hover focus"
          data-bs-content="Add Note"
        >
          <button
            disabled={note.title.length < 3 || note.description.length < 5}
            type="submit"
            className="btn btn-bd-primary"
            onClick={handleClick}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </span>
      </form>
    </div>
  );
};

export default AddNote;
