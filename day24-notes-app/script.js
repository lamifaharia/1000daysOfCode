
/* Select HTML elements */
const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");
const message = document.getElementById("message");

// Load saved notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Save notes to localStorage
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Display all notes
function displayNotes() {
    notesContainer.innerHTML = "";

    notes.forEach((note) => {
        const card = document.createElement("div");
        card.classList.add("note-card");

        const title = document.createElement("h3");
        title.textContent = note.title;

        const content = document.createElement("p");
        content.textContent = note.content;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        // Delete the selected note
        deleteBtn.addEventListener("click", () => {
            notes = notes.filter((item) => item.id !== note.id);

            saveNotes();
            displayNotes();

            message.textContent = "Note deleted!";
        });

        card.appendChild(title);
        card.appendChild(content);
        card.appendChild(deleteBtn);

        notesContainer.appendChild(card);
    });
}

// Add a new note
function addNote() {
    const title = noteTitle.value.trim();
    const content = noteContent.value.trim();

    if (title === "" || content === "") {
        message.textContent = "Please enter a title and note.";
        return;
    }

    const newNote = {
        id: Date.now(),
        title: title,
        content: content
    };

    notes.unshift(newNote);

    saveNotes();
    displayNotes();

    noteTitle.value = "";
    noteContent.value = "";

    message.textContent = "Note saved successfully!";

    noteTitle.focus();
}

// Add button event
addBtn.addEventListener("click", addNote);

// Display saved notes when the page loads
displayNotes();