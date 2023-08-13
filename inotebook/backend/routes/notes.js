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

module.exports = router;
