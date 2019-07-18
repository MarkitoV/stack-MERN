const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
}

notesCtrl.createNote = async (req, res) => {
  const { title, content, author, date } = req.body;
  const newNote = new Note({
    title,
    content,
    author,
    date
  });
  console.log(newNote);
  await newNote.save();
  res.json({message: 'Note Saved'})
}

notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  console.log(note);
  res.json({data: 'Note Data'})
}

notesCtrl.updateNote = async (req, res) => {
  const { title, content, author } = req.body;
  await Note.findOneAndUpdate({_id: req.params.id}, {
    title,
    content,
    author
  });
  console.log(req.body);
  res.json({message: 'Note Updated'})
}

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({message: 'Note Deleted'})
}

module.exports = notesCtrl;