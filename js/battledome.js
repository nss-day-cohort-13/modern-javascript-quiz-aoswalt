"use strict";

var Battledome = (function(battle) {  // eslint-disable-line no-var
  let bot1 = null;
  let bot2 = null;

  let stillFighting = false;

  battle.initialize = function(input) {
    bot1 = new battle.Factory[input.bot1.type](input.bot1.name);
    bot2 = new battle.Factory[input.bot2.type](input.bot2.name);

    return { bot1, bot2 };
  };

  battle.fight = function() {
    if(stillFighting) { stillFighting = bot1.attack(bot2); }
    if(stillFighting) { stillFighting = bot2.attack(bot1); }

    return stillFighting;
  };

  return battle;
}(Battledome || {}));
