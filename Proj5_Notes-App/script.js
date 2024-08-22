const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
    attachNoteListeners();
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Attach listeners to each note for updating storage and handling keydown
function attachNoteListeners() {
    const notes = document.querySelectorAll(".input-box");

    notes.forEach(note => {
        // Update storage on keyup in any note
        note.addEventListener("keyup", () => {
            updateStorage();
        });

        // Prevent default behavior of Enter key to insert a new line
        note.addEventListener("keydown", (event) => {
            if(event.key === "Enter") {
                document.execCommand("insertLineBreak");
                event.preventDefault();
            }
        });
    });
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "https://pics.freeicons.io/uploads/icons/png/1707808291556277118-64.png";
    notesContainer.appendChild(inputBox).appendChild(img);

    attachNoteListeners();
    updateStorage();
})

notesContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

showNotes();