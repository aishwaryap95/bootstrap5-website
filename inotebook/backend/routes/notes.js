const express = require("express");
const { body, validationResult } = require("express-validator"); // Import express-validator
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");

// Route 1 : Get all the notes using: Get "/api/auth/createuser".   Login required

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error");
  }
});

// Route 2 : Add a new Note using: Post "/api/auth/addnote".   Login required

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter valid title please").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // If there are errors, return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // now create new note
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server Error");
    }
  }
);

// Route 3 : Update an existing Note using: PUT "/api/notes/updatenote".   Login required

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  // create a new Note object
  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }

  // Find the note to be updated and update it
  let note = await Note.findById(req.params.id);
  if (!note) {
    res.status(404).send("Not Found");
  }

  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed");
  }

  note = await Note.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ note });
});

module.exports = router;
