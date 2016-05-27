"use strict";

/* eslint-disable no-var */
var Battledome = (function(battle) {
/* eslint-enable no-var */
  battle.Factory = {};

  battle.Factory.Robot = function() {
    this.health = 100;
    this.damage = 20;
  };

  battle.Factory.Robot.prototype.isAlive = function() {
    return this.health > 0;
  };

  battle.Factory.Robot.prototype.attack = function(enemy) {
    enemy.health -= this.damage;
  };


  return battle;
}(Battledome || {}));
