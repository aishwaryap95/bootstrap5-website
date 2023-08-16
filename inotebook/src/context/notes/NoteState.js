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
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
