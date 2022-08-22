const alert = document.querySelector('.alert');
const alertClose = alert.querySelector('.alert__close');
const alertBack= alert.querySelector('.alert__background');


alertClose.addEventListener('click', function() {
  alert.classList.add('alert-hide');
});
alertBack.addEventListener('click', function() {
    alert.classList.add('alert-hide');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      alert.classList.add("alert-hide");
    }
  }
);