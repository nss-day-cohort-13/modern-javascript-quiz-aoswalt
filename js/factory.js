"use strict";

/* eslint-disable no-var */
var Battledome = (function(battle) {
/* eslint-enable no-var */
  battle.Factory = {};

  const botList = [];

  battle.Factory.loadBots = callback => botList.forEach(b => callback(b));


  //NOTE(adam): base robot class
  battle.Factory.Robot = function() {
    this.label = "Robot";
    this.baseHealth = 100;
    this.health = 100;
    this.damage = 20;
  };

  battle.Factory.Robot.prototype.isAlive = function() {
    return this.health > 0;
  };

  battle.Factory.Robot.prototype.attack = function(enemy) {
    enemy.health -= this.damage;
    return enemy.health > 0;
  };

  //NOTE(adam): drone type and subclasses
  battle.Factory.Drone = function() {
    this.label = "Drone";

  };
  battle.Factory.Drone.prototype = Object.create(battle.Factory.Robot.prototype);
  battle.Factory.Drone.constructor = battle.Factory.Drone;

  battle.Factory.QuadCopter = function() {
    this.label = `QuadCopter ${this.label}`;

  };
  battle.Factory.QuadCopter.prototype = Object.create(battle.Factory.Drone.prototype);
  battle.Factory.QuadCopter.constructor = battle.Factory.QuadCopter;
  botList.push("QuadCopter");

  battle.Factory.HexBlade = function() {
    this.label = `HexBlade ${this.label}`;

  };
  battle.Factory.HexBlade.prototype = Object.create(battle.Factory.Drone.prototype);
  battle.Factory.HexBlade.constructor = battle.Factory.HexBlade;
  botList.push("HexBlade");

  //NOTE(adam): bipedal type and subclasses
  battle.Factory.Bipedal = function() {
    this.label = "Bipedal";

  };
  battle.Factory.Bipedal.prototype = Object.create(battle.Factory.Robot.prototype);
  battle.Factory.Bipedal.constructor = battle.Factory.Bipedal;

  battle.Factory.AtSt = function() {
    this.label = `AT-ST ${this.label}`;

  };
  battle.Factory.AtSt.prototype = Object.create(battle.Factory.Bipedal.prototype);
  battle.Factory.AtSt.constructor = battle.Factory.AtSt;
  botList.push("AtSt");

  battle.Factory.T800 = function() {
    this.label = `T-800 ${this.label}`;

  };
  battle.Factory.T800.prototype = Object.create(battle.Factory.Bipedal.prototype);
  battle.Factory.T800.constructor = battle.Factory.T800;
  botList.push("T800");

  //NOTE(adam): atv type and subclasses
  battle.Factory.Atv = function() {
    this.label = "ATV";

  };
  battle.Factory.Atv.prototype = Object.create(battle.Factory.Robot.prototype);
  battle.Factory.Atv.constructor = battle.Factory.Atv;

  battle.Factory.Rover = function() {
    this.label = `Rover ${this.label}`;

  };
  battle.Factory.Rover.prototype = Object.create(battle.Factory.Atv.prototype);
  battle.Factory.Rover.constructor = battle.Factory.Rover;
  botList.push("Rover");

  battle.Factory.Maximus = function() {
    this.label = `Maximus ${this.label}`;

  };
  battle.Factory.Maximus.prototype = Object.create(battle.Factory.Atv.prototype);
  battle.Factory.Maximus.constructor = battle.Factory.Maximus;
  botList.push("Maximus");


  return battle;
}(Battledome || {}));
