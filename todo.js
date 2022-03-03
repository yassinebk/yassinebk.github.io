const nameInput = document.querySelector("#name-input");
const contentInput = document.querySelector("#content-input");
const submitBtn = document.querySelector("#submit-btn");
const deleteButtons = document.querySelectorAll("delete-button");
const notesContainer = document.querySelector("#notes-container");
const nameAlert = document.querySelector("#name-alert");
const contentAlert = document.querySelector("#content-alert");
let nameText = "";
let contentText = "";
let id = 0;
const bgColors = [
  "black",
  "red",
  "yellow",
  "blue",
  "gray",
  "green",
  "orange",
  "purple",
  "white",
  "transparent",
];

nameInput.textContent = "";
contentInput.textContent = "";

nameInput.addEventListener("input", (e) => {
  nameText = e.target.value;
  verifyInput();
});

contentInput.addEventListener("input", (e) => {
  contentText = e.target.value;
  verifyInput();
});

submitBtn.addEventListener("click", addNote);

function addNote() {
  notesContainer.innerHTML = notesContainer.innerHTML.concat(
    ` <li class=" col-md-8 card" style="display: flex;justify-content:space-between" id="note-${id}">
            <h5 class="card-title">${nameText}:${contentText}</h5>
            <button type="button" id="delete-button"   onclick="if(event.target.id==='delete-button')event.target.parentElement.remove(); else event.target.parentElement.parentElement.remove();" 
                class="custom-btn"
                style="width:40px;height:40px;display:flex;align-items:center;background:rgb(71, 64, 64);justify-content:center ; border:0.5px solid gray;cursor:pointer"
            >

                            <i class="fas fa-trash icon" style="color:rgb(216, 127, 127)"></i>
            </button>

        </li>`
  );

  const note = document.querySelector(`#note-${id}`);
  note.addEventListener("click", () => {
    note.style.backgroundColor = bgColors[Math.floor(10 * Math.random())];
    if (note.style.backgroundColor === "white") note.style.color = "black";
    else note.style.color = "black";
  });

  id++;
  nameText = "";
  contentText = "";

  nameInput.value = "";
  contentInput.value = "";
  submitBtn.setAttribute("disabled", "true");
}

function verifyInput() {

  if (contentText !== "" && nameText !== "") {
    submitBtn.removeAttribute("disabled");
  }
    if (nameText == "") nameAlert.style.display = "block"
    else nameAlert.style.display = "none";
    if (contentText == "")  contentAlert.style.display="block" 
    else contentAlert.style.display = "none";


}
