const communicationBtn = document.querySelector('.communication-button');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal-close');
const nameModal = modal.querySelector('.input-name');
const modalForm = modal.querySelector('.modal-form');
const emailModal = modal.querySelector('.input-email');
const textModal = modal.querySelector('.modal-textarea');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

communicationBtn.addEventListener('click', function() {
  modal.classList.add('modal-show');

  if (storage) {
    nameModal.value = storage;
    emailModal.focus();
  } else {
    nameModal.focus();
  }
});

modalClose.addEventListener('click', function() {
  modal.classList.remove('modal-show');
  modal.classList.remove("modal-error");
});

modalForm.addEventListener('submit', function(evt) {
  if (!nameModal.value || !emailModal.value || !textModal.value) {
    evt.preventDefault();
    modal.classList.remove('modal-error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("login", nameModal.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});