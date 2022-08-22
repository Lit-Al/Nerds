const firstSelectBtn = document.querySelector('.slaider-controls-button:first-child');
const secondSelectBtn = document.querySelector('.slaider-controls-button:nth-child(2)');
const thirdSelectBtn = document.querySelector('.slaider-controls-button:nth-child(3)');
const slaiderItemFirst = document.querySelector('.slaider-item-first');
const slaiderItemSecond = document.querySelector('.slaider-item-second');
const slaiderItemThird = document.querySelector('.slaider-item-third');


firstSelectBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  slaiderItemFirst.classList.add('slaider-item-active');
  slaiderItemSecond.classList.remove('slaider-item-active');
  slaiderItemThird.classList.remove('slaider-item-active');
  firstSelectBtn.classList.add('selected-button');
  secondSelectBtn.classList.remove('selected-button');
  thirdSelectBtn.classList.remove('selected-button');
});

secondSelectBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  slaiderItemSecond.classList.add('slaider-item-active');
  slaiderItemFirst.classList.remove('slaider-item-active');
  slaiderItemThird.classList.remove('slaider-item-active');
  secondSelectBtn.classList.add('selected-button');
  firstSelectBtn.classList.remove('selected-button');
  thirdSelectBtn.classList.remove('selected-button');
});

thirdSelectBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  slaiderItemThird.classList.add('slaider-item-active');
  slaiderItemFirst.classList.remove('slaider-item-active');
  slaiderItemSecond.classList.remove('slaider-item-active');
  thirdSelectBtn.classList.add('selected-button');
  secondSelectBtn.classList.remove('selected-button');
  firstSelectBtn.classList.remove('selected-button');
});