"use strict";

var Battledome = (function(battle) {  // eslint-disable-line no-var
  let bot1 = null;
  let bot2 = null;
  let displayBot1 = null;
  let displayBot2 = null;

  let stillFighting = false;

  battle.initialize = function(input, displayClosure) {
    bot1 = new battle.Factory[input.bot1.type](input.bot1.name);
    bot2 = new battle.Factory[input.bot2.type](input.bot2.name);

    displayBot1 = displayClosure(1);
    displayBot2 = displayClosure(2);

    battle.updateDisplay();
  };

  battle.updateDisplay = function() {
    displayBot1(bot1);
    displayBot2(bot2);
  };

  battle.fight = function() {
    if(stillFighting) { stillFighting = bot1.attack(bot2); }
    if(stillFighting) { stillFighting = bot2.attack(bot1); }

    battle.updateDisplay();
    return stillFighting;
  };

  return battle;
}(Battledome || {}));
