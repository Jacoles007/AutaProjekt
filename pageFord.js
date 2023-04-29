const cenaAuta = 120000;
const oponyDodatek = 3000;
const gwarancjaDodatek = 6000;
const $opony2k = document.querySelector(".opony");
const $gwarancja5k = document.querySelector(".gwarancja");
const $cenaTotalna = document.querySelector(".cenaTotal");

$opony2k.addEventListener("click", function () {
  let wynikOpony = (document.querySelector(".oponyCena").textContent =
    oponyDodatek);
});

$gwarancja5k.addEventListener("click", function () {
  let wynikGwarancja = (document.querySelector(".gwarancjaCena").textContent =
    gwarancjaDodatek);
});

$cenaTotalna.addEventListener("click", function () {
  document.querySelector(".cenaCalkowita").textContent =
    cenaAuta + wynikOpony + wynikGwarancja;
});

const $notes = document.getElementById("notes");
const $saveBtn = document.getElementById("saveBtn");
const $loadBtn = document.getElementById("loadBtn");

function saveNotes() {
  localStorage.setItem("notes!!", $notes.value);
}

function loadNotes() {
  const loadedNotes = localStorage.getItem("notes!!");
  $notes.value = loadedNotes;
}

$saveBtn.addEventListener("click", saveNotes);
$loadBtn.addEventListener("click", loadNotes);
