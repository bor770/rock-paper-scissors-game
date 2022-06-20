function init() {
  const rock = document.querySelector(`#rock`);
  const paper = document.querySelector(`#paper`);
  const scissors = document.querySelector(`#scissors`);
  const step1 = document.querySelector(`#step1`);
  const step2 = document.querySelector(`#step2`);
  const step3 = document.querySelector(`#step3`);
  const step4Lose = document.querySelector(`#step4Lose`);
  const step4Win = document.querySelector(`#step4Win`);
  rock.addEventListener(`click`, getUserPick);
  paper.addEventListener(`click`, getUserPick);
  scissors.addEventListener(`click`, getUserPick);
}

function getUserPick(event) {
  const step1 = document.querySelector(`#step1`);
  const step2 = document.querySelector(`#step2`);
  const step3 = document.querySelector(`#step3`);
  const step4Lose = document.querySelector(`#step4Lose`);
  const step4Win = document.querySelector(`#step4Win`);
  step1.classList.add(`d-none`);
  step2.classList.remove(`d-none`);
}

addEventListener(`load`, init);