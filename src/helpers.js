'use strict';

// function pickRandom(items) {
//   const randomIndx = Math.floor(Math.random()*items.length);
//   const pick = items[randomIndx];
// }


function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export { shuffle };