const startButton = document.getElementById('start-btn');
const startText = document.getElementById('start-txt');
const rug = document.getElementById('rug');
const modal = $('#modal');
const modalBody = $('.modal-body');
const mcloseButton = $('.model-close-button');
const score = $('#score');
const scoreBody = $('.score-body');
const scloseButton = $('.score-close-button');
const startingMinutes = 1;
const countdownEl = document.getElementById('countdown');
let yourScore;
let hasKey = false;
let noteStart = false;
let hasNoteOne = false;
let hasNoteTwo = false;
let time = startingMinutes * 120;
let gameStarted = false;

startButton.addEventListener('click', startGame);

rug.addEventListener('click', tryRug);

// book, gets note1
// note1 to crab gets note2
// note2 to rug gets key
// key to door

function startGame() {
  openModal(
    'you smell posion flling the room hurry and find the key 1st hint kip'
  );
  startButton.classList.add('hide');
  startText.style.display = 'none';
  updateCountdown;
  setInterval(updateCountdown, 1000);
  gameStarted = true;
}

function noteOne() {
  if (gameStarted) {
    openModal('have a clawsome day!');
    document.getElementById('note1').style.opacity = '0';
    document.getElementById('book').style.opacity = '10';
    hasNoteOne = true;
  }
}
function pickupKey() {
  if (gameStarted) {
    openModal('hurry to the door!');
    // document.getElementById('rug').style.opacity = '10';
    hasKey = true;
  }
}
function noteTwo() {
  if (gameStarted) {
    openModal('its getting cold i need somthing to keep me warm!');
    document.getElementById('note2').style.opacity = '0';
    document.getElementById('painting').style.opacity = '10';
    hasNoteTwo = true;
  }
}

function reset() {
  document.getElementById('').style.opacity = '10';
}

function tryDoor() {
  if (gameStarted && !yourScore) {
    if (hasKey === true) {
      openModal('you made it congrats!');
      scoreScreen(time);
      time = 0;
    } else {
      openModal('hurry find the key');
    }
  }
}
function pickupKey() {
  if (gameStarted) {
    openModal('congrats you pickup the key but can you make it in time');
    document.getElementById('key').style.opacity = '0';
    hasKey = true;
  }
}

function tryPainting() {
  if (gameStarted) {
    if (hasNoteOne == true) {
      document.getElementById('painting').style.opacity = '0';
      document.getElementById('painting').style.zIndex = -1;
      openModal('you find somthing behind');
    } else {
      openModal('somthings off but you dont know yet');
    }
  }
}

function tryRug() {
  if (gameStarted) {
    if (hasNoteTwo == true) {
      openModal('you pull the rug back');
      document.getElementById('rug').style.opacity = '0';
      document.getElementById('rug').style.zIndex = -1;
    } else {
      openModal('this looks soft enough to sleep on!');
    }
  }
}
function tryBook() {
  if (gameStarted) {
    openModal(
      'you manage to find a book that seems out of place with a note in it!'
    );
    document.getElementById('book').style.opacity = '0';
    document.getElementById('book').style.zIndex = -1;
  }
}
function tryTable() {
  if (gameStarted) {
    openModal('you are too weak to do that');
  }
}

function scoreScreen(temptime) {
  yourScore = temptime * 100;
  score.css('display', 'flex');
  scoreBody.text(`You made it! Your score is: ${yourScore}`);
}

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
  time = time < 0 ? 0 : time;
}

function openModal(text) {
  modal.css('display', 'flex');
  modalBody.text(text);
  setTimeout(() => {
    closeModal();
  }, 2000);
}
function closeModal() {
  modal.css('display', 'none');
}
mcloseButton.click(closeModal);
