/* global getVariedInt:false */
"use strict";

/* eslint-disable no-var */
var Battledome = (function(battle) {
/* eslint-enable no-var */
  battle.Factory = {};

  const botList = [];

  battle.Factory.listBots = callback => botList.forEach(b => callback(b));


  //NOTE(adam): base robot class
  battle.Factory.Robot = function() {
    this.label = "Robot";
    this.healthBase = 100;
    this.healthVary = 0;
    this.health = getVariedInt(this.healthBase, this.healthVary);
    this.damageBase = 20;
    this.damageVary = 0;
  };

  battle.Factory.Robot.prototype.isAlive = function() {
    return this.health > 0;
  };

  battle.Factory.Robot.prototype.attack = function(enemy) {
    enemy.health -= getVariedInt(this.damageBase, this.damageVary);
    return enemy.health > 0;
  };

  //NOTE(adam): drone type and subclasses
  battle.Factory.Drone = function() {
    this.label = "Drone";
  };
  battle.Factory.Drone.prototype = new battle.Factory.Robot();

  battle.Factory.QuadCopter = function() {
    this.label = `QuadCopter ${this.label}`;
  };
  battle.Factory.QuadCopter.prototype = new battle.Factory.Drone();
  botList.push("QuadCopter");

  battle.Factory.HexBlade = function() {
    this.label = `HexBlade ${this.label}`;
  };
  battle.Factory.HexBlade.prototype = new battle.Factory.Drone();
  botList.push("HexBlade");

  //NOTE(adam): bipedal type and subclasses
  battle.Factory.Bipedal = function() {
    this.label = "Bipedal";
  };
  battle.Factory.Bipedal.prototype = new battle.Factory.Robot();

  battle.Factory.AtSt = function() {
    this.label = `AT-ST ${this.label}`;
  };
  battle.Factory.AtSt.prototype = new battle.Factory.Bipedal();
  botList.push("AtSt");

  battle.Factory.T800 = function() {
    this.label = `T-800 ${this.label}`;
  };
  battle.Factory.T800.prototype = new battle.Factory.Bipedal();
  botList.push("T800");

  //NOTE(adam): atv type and subclasses
  battle.Factory.Atv = function() {
    this.label = "ATV";
  };
  battle.Factory.Atv.prototype = new battle.Factory.Robot();

  battle.Factory.Rover = function() {
    this.label = `Rover ${this.label}`;
  };
  battle.Factory.Rover.prototype = new battle.Factory.Atv();
  botList.push("Rover");

  battle.Factory.Maximus = function() {
    this.label = `Maximus ${this.label}`;
  };
  battle.Factory.Maximus.prototype = new battle.Factory.Atv();
  botList.push("Maximus");


  return battle;
}(Battledome || {}));
