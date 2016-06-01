/* global getVariedInt:false */
"use strict";

/* eslint-disable no-var */
var Battledome = (function(battle) {
/* eslint-enable no-var */
  battle.Factory = {};

  const botTypeList = [];

  battle.Factory.listBotTypes = callback => botTypeList.forEach(b => callback(b));


  //NOTE(adam): base robot class
  battle.Factory.Robot = function(name) {
    this.name = name;
    this.label = "Robot";
    this.healthBase = 100;
    this.healthVary = 0;
    this.health = getVariedInt(this.healthBase, this.healthVary);
    this.damageBase = 20;
    this.damageVary = 5;
  };

  battle.Factory.Robot.prototype.isAlive = function() {
    return this.health > 0;
  };

  battle.Factory.Robot.prototype.attack = function(enemy) {
    enemy.health -= getVariedInt(this.damageBase, this.damageVary);
    return enemy.isAlive();
  };

  //NOTE(adam): drone type and subclasses
  battle.Factory.Drone = function(name) {
    battle.Factory.Robot.call(this, name);
    this.label = "Drone";
  };
  battle.Factory.Drone.prototype = new battle.Factory.Robot();

  battle.Factory.QuadCopter = function(name) {
    battle.Factory.Drone.call(this, name);
    this.label = `QuadCopter ${this.label}`;
  };
  battle.Factory.QuadCopter.prototype = new battle.Factory.Drone();
  botTypeList.push("QuadCopter");

  battle.Factory.HexBlade = function(name) {
    battle.Factory.Drone.call(this, name);
    this.label = `HexBlade ${this.label}`;
  };
  battle.Factory.HexBlade.prototype = new battle.Factory.Drone();
  botTypeList.push("HexBlade");

  //NOTE(adam): bipedal type and subclasses
  battle.Factory.Bipedal = function(name) {
    battle.Factory.Robot.call(this, name);
    this.label = "Bipedal";
  };
  battle.Factory.Bipedal.prototype = new battle.Factory.Robot();

  battle.Factory.AtSt = function(name) {
    battle.Factory.Bipedal.call(this, name);
    this.label = `AT-ST ${this.label}`;
  };
  battle.Factory.AtSt.prototype = new battle.Factory.Bipedal();
  botTypeList.push("AtSt");

  battle.Factory.T800 = function(name) {
    battle.Factory.Bipedal.call(this, name);
    this.label = `T-800 ${this.label}`;
  };
  battle.Factory.T800.prototype = new battle.Factory.Bipedal();
  botTypeList.push("T800");

  //NOTE(adam): atv type and subclasses
  battle.Factory.Atv = function(name) {
    battle.Factory.Robot.call(this, name);
    this.label = "ATV";
  };
  battle.Factory.Atv.prototype = new battle.Factory.Robot();

  battle.Factory.Rover = function(name) {
    battle.Factory.Atv.call(this, name);
    this.label = `Rover ${this.label}`;
  };
  battle.Factory.Rover.prototype = new battle.Factory.Atv();
  botTypeList.push("Rover");

  battle.Factory.Maximus = function(name) {
    battle.Factory.Atv.call(this, name);
    this.label = `Maximus ${this.label}`;
  };
  battle.Factory.Maximus.prototype = new battle.Factory.Atv();
  botTypeList.push("Maximus");


  return battle;
}(Battledome || {}));
