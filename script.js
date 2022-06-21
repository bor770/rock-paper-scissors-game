"use strict";

const view = {

  init() {
    this.step1 = document.querySelector(`#step1`);
    this.step2 = document.querySelector(`#step2`);
    this.step2You = document.querySelector(`#step2You`);
    this.step2House = document.querySelector(`#step2House`);
    this.step2Blank = document.querySelector(`#step2Blank`);
    this.score = document.querySelector(`#score`);
    this.loseWin = document.querySelector(`#loseWin`);
    this.youLoseWin = document.querySelector(`#youLoseWin`);
    this.rules = document.querySelector(`#rules`);
    this.reset();
  },

  reset() {
    this.step2You.classList.remove(`rps_rock`);
    this.step2You.classList.remove(`step-2__rps_rock`);
    this.step2You.classList.remove(`rps_paper`);
    this.step2You.classList.remove(`step-2__rps_paper`);
    this.step2You.classList.remove(`rps_scissors`);
    this.step2You.classList.remove(`step-2__rps_scissors`);
    this.step2House.classList.remove(`rps_rock`);
    this.step2House.classList.remove(`step-2__rps_rock`);
    this.step2House.classList.remove(`rps_paper`);
    this.step2House.classList.remove(`step-2__rps_paper`);
    this.step2House.classList.remove(`rps_scissors`);
    this.step2House.classList.remove(`step-2__rps_scissors`);
    this.step1.classList.remove(`is-hidden`);
    this.step2.classList.add(`is-hidden`);
    this.step2Blank.classList.remove(`is-hidden`);
    this.step2House.classList.add(`is-hidden`);
    this.loseWin.classList.add(`is-hidden`);
    this.youLoseWin.innerText = `You Lose`;
    this.rules.classList.add(`is-hidden`);
  },

  updateScore(score) {
    this.score.innerText = score;
  },

  hideStep1() {
    this.step1.classList.add(`is-hidden`);
  },

  displayStep2() {
    this.step2.classList.remove(`is-hidden`);
  },

  displayYou(rps) {
    this.step2You.classList.add(`rps_${rps}`);
    this.step2You.classList.add(`step-2__rps_${rps}`);
  },

  displayHouse(rps) {
    this.step2Blank.classList.add(`is-hidden`);
    this.step2House.classList.remove(`is-hidden`);
    this.step2House.classList.add(`rps_${rps}`);
    this.step2House.classList.add(`step-2__rps_${rps}`);
  },

  displayLoseWin() {
    this.loseWin.classList.remove(`is-hidden`);
  },

  displayLose() {
    this.youLoseWin.innerText = `You Lose`;
  },

  displayWin() {
    this.youLoseWin.innerText = `You Win`;
  },

  displayDraw() {
    this.youLoseWin.innerText = `Draw`;
  },

  displayRules() {
    this.rules.classList.remove(`is-hidden`);
  },

  hideRules() {
    this.rules.classList.add(`is-hidden`);
  }

};

const model = {
  score: 0,
  shapes: [`rock`, `paper`, `scissors`],

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  async play(rps) {
    let win;
    this.you = rps;
    this.house = this.shapes[Math.floor(3 * Math.random())];
    win = this.winner();
   
    view.init();

    view.hideStep1();
    view.displayStep2();
    view.displayYou(rps);
    await this.wait(1000);
    view.displayHouse(this.house);
    await this.wait(1000);
    this.score += win;
    view.updateScore(this.score);
    view.displayLoseWin();
    if (win > 0) {
      view.displayWin();
    } else if (win === 0) {
      view.displayDraw();
    } else {
      view.displayLose();
    }
  },

  winner() {
    if ((this.you === `rock` && this.house === `scissors`) || (this.you === `scissors` && this.house === `paper`) || (this.you === `paper` && this.house === `rock`)) {
      return 1;
    } else if (this.you === this.house) {
      return 0;
    } else {
      return -1;
    }
  }
};

const controller = {
  init() {
    const step1Rock = document.querySelector(`#step1Rock`);
    const step1Paper = document.querySelector(`#step1Paper`);
    const step1Scissors = document.querySelector(`#step1Scissors`);
    const playAgain = document.querySelector(`#playAgain`);
    const rulesButton = document.querySelector(`#rulesButton`);
    const rulesClose = document.querySelector(`#rulesClose`);

    view.init();

    step1Rock.addEventListener(`click`, () => {
      model.play(`rock`);
    });

    step1Paper.addEventListener(`click`, () => {
      model.play(`paper`);
    });

    step1Scissors.addEventListener(`click`, () => {
      model.play(`scissors`);
    });

    playAgain.addEventListener(`click`, () => {
      view.reset();
    });

    rulesButton.addEventListener(`click`, () => {
      view.displayRules();
    });

    rulesClose.addEventListener(`click`, () => {
      view.hideRules();
    });

  }
}

function init() {
  controller.init();
}

addEventListener(`load`, init);