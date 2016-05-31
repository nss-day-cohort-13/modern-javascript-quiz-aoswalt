"use strict";

/* eslint-disable no-var */
var Battledome = (function(battle) {
/* eslint-enable no-var */
  const bot1 = new battle.Factory.Robot();
  const bot2 = new battle.Factory.Robot();

  let stillFighting = false;

  battle.fight = function() {
    if(stillFighting) { stillFighting = bot1.attack(bot2); }
    if(stillFighting) { stillFighting = bot2.attack(bot1); }

    return stillFighting;
  };

  return battle;
}(Battledome || {}));
