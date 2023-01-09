import React, { useState } from "react";
import { Add } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { Button } from "@material-ui/core";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [clicked, setClick] = React.useState(false);

  function handleExpand() {
    setClick(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {clicked && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={handleExpand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={clicked ? "3" : "1"}
        />
        <Zoom in={clicked}>
          <Fab onClick={submitNote}>
            <Add />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
