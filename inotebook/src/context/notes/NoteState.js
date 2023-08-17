import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64d8eedd696f47c18cf8cfb5",
      user: "64d872620ad4923a441cb62c",
      title: "my title",
      description: "React course details",
      tag: "personal",
      date: "2023-08-13T14:55:25.028Z",
      __v: 0,
    },
    {
      _id: "64d8f2dc33f557438363a2d3",
      user: "64d872620ad4923a441cb62c",
      title: "my title",
      description: "React course details",
      tag: "personal",
      date: "2023-08-13T15:12:28.977Z",
      __v: 0,
    },
    {
      _id: "64dce7652236e0d7d97a98e3",
      user: "64d872620ad4923a441cb62c",
      title: "React Course 70% done",
      description: "Coding react application",
      tag: "YouTube",
      date: "2023-08-16T15:12:37.086Z",
      __v: 0,
    },
    {
      _id: "64d8eedd696f47c18cf8cfb8",
      user: "64d872620ad4923a441cb62c",
      title: "my title",
      description: "React course details",
      tag: "personal",
      date: "2023-08-13T14:55:25.028Z",
      __v: 0,
    },
    {
      _id: "64d8f2dc33f557438363a2d9",
      user: "64d872620ad4923a441cb62c",
      title: "my title",
      description: "React course details",
      tag: "personal",
      date: "2023-08-13T15:12:28.977Z",
      __v: 0,
    },
    {
      _id: "64d8eedd696f47c18cf8cfb0",
      user: "64d872620ad4923a441cb62c",
      title: "my title",
      description: "React course details",
      tag: "personal",
      date: "2023-08-13T14:55:25.028Z",
      __v: 0,
    },
    {
      _id: "64d8f2dc33f557438363a2d4",
      user: "64d872620ad4923a441cb62c",
      title: "my title",
      description: "React course details",
      tag: "personal",
      date: "2023-08-13T15:12:28.977Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a Note
  const addNote = (title, description, tag) => {
    console.log("Adding a new Note");

    const note = {
      _id: "64d8f2dc33f557438363a2d4",
      user: "64d872620ad4923a441cdb62c",
      title: title,
      description: description,
      tag: "personal",
      date: "2023-08-13T15:12:28.977Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = () => {};

  //Edit a Note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
