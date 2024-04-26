const appEl = document.getElementById("app");
const btnEl = document.getElementById("btn");

function saveNotes(notes) {
  return localStorage.setItem("noteApp", JSON.stringify(notes));
}

function getNotes() {
  return JSON.parse(localStorage.getItem("noteApp") || "[]");
}

getNotes().forEach((note) => {
  const noteEl = creatNoteEl(note.id, note.content);
  appEl.insertBefore(noteEl, btnEl);
});

function deleteNote(id, noteElem) {
  const notes = getNotes().filter((note) => {
    return note.id != id;
  });
  saveNotes(notes);
  appEl.removeChild(noteElem);
}

function updateNote(id, content) {
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = content;
  saveNotes(notes);
}

function creatNoteEl(id, content) {
  const noteElem = document.createElement("textarea");
  noteElem.classList.add("note");
  noteElem.placeholder = "Empty Note";
  noteElem.value = content;

  noteElem.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete this note");
    if (warning) {
      deleteNote(id, noteElem);
    }
  });

  noteElem.addEventListener("input", () => {
    updateNote(id, noteElem.value);
  });
  return noteElem;
}

function addNote() {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: " ",
  };
  const noteEl = creatNoteEl(noteObj.id, noteObj.content);
  appEl.insertBefore(noteEl, btnEl);
  notes.push(noteObj);
  saveNotes(notes);
}

btnEl.addEventListener("click", addNote);
