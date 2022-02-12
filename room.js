const startingMinutes = 1;
let time = startingMinutes * 120;
let hasKey = true;
let door = 'locked';
let noteStart = true;
let hasNoteOne = true;
let hasNoteTwo = true;

const countdownEl = document.getElementById('countdown');

function startGame() {
  alert('you smell posion flling the room hurry and find the key 1st hint kip');
  startButton.classList.add('hide');
  startText.style.display = 'none';
  updateCountdown;
  setInterval(updateCountdown, 1000);
}

function noteOne() {
  alert('have a clawsome day!');
  document.getElementById('note1').style.opacity = '0';
  document.getElementById('book').style.opacity = '10';
  hasNoteOne = true;
}
function pickupKey() {
  alert('hurry to the door!');
  document.getElementById('rug').style.opacity = '10';
  hasKey = true;
}
function noteTwo() {
  alert('its getting cold i need somthing to keep me warm!');
  document.getElementById('note2').style.opacity = '0';
  document.getElementById('painting').style.opacity = '10';
  hasNoteTwo = true;
}

function reset() {
  document.getElementById('').style.opacity = '10';
}

function tryDoor() {
  console.log('you clicked the door');
  if (hasKey == true) {
    door == 'unlocked';
    alert('you made it congrats!');
  } else {
    hasKey == false;
    alert('hurry find the key');
  }
}
function pickupKey() {
  hasKey == true;
  alert('congrats you pickup the key but can you make it in time');
  document.getElementById('key').style.opacity = '0';
}

function tryPainting() {
  if (hasNoteOne == true) {
    document.getElementById('painting').style.opacity = '0';
    document.getElementById('painting').style.zIndex = -1;
    alert('you find somthing behind');
  } else {
    hasNoteOne == false;
    alert('somthings off but you dont know yet');
  }
}

function tryRug() {
  sfx.rug.play();
  alert('you pull the rug back');
  if (hasNoteTwo == true) {
    document.getElementById('rug').style.opacity = '0';
    document.getElementById('rug').style.zIndex = -1;
  } else {
    hasNoteTwo == false;
    alert('this looks soft enough to sleep on!');
  }
}
function tryBook() {
  alert('you manage to find a book that seems out of place with a note in it!');
  document.getElementById('book').style.opacity = '0';
  document.getElementById('book').style.zIndex = -1;
}
function tryTable() {
  console.log('what are you doing');
  alert('you are too weak to do that');
}

// var endGame = function () {
//   window.alert('you managed to escape!')
// }
// score = time it took to get out

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
  time = time < 0 ? 0 : time;
}
