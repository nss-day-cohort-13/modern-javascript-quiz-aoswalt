/* eslint-disable no-unused-vars */
function randInt(limit) { return Math.floor(Math.random() * limit); }
function getRandomElement(list) { return list[randInt(list.length)]; }
function getVariedInt(base, vary) { return base - vary + randInt(vary * 2 + 1); }
