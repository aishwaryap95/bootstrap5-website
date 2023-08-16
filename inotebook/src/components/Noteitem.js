//rafce
import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title"> {note.title}</h5>
          <p className="card-text">{note.description} lorem34</p>
          <i className="fas fa-trash mx-2"></i>
          <i className="fas fa-edit mx-2"></i>{" "}
          {/* Use fa-edit instead of fa-pen-to-square */}
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
