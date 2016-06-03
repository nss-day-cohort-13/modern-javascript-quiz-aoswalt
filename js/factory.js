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
    this.damageBase = 20;
    this.damageVary = 0;
    this.refreshHealth();
  };

  battle.Factory.Robot.prototype.refreshHealth = function() {
    this.health = getVariedInt(this.healthBase, this.healthVary);
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
    this.healthBase -= 20;
    this.damageBase -= 5;
    this.refreshHealth();
  };
  battle.Factory.Drone.prototype = new battle.Factory.Robot();

  battle.Factory.QuadCopter = function(name) {
    battle.Factory.Drone.call(this, name);
    this.label = `QuadCopter ${this.label}`;
    this.healthBase -= 5;
    this.healthVary = 10;
    this.damageBase -= 2;
    this.damageVary = 3;
    this.refreshHealth();
  };
  battle.Factory.QuadCopter.prototype = new battle.Factory.Drone();
  botTypeList.push("QuadCopter");

  battle.Factory.HexBlade = function(name) {
    battle.Factory.Drone.call(this, name);
    this.label = `HexBlade ${this.label}`;
    this.healthBase += 5;
    this.healthVary = 8;
    this.damageBase -= 1;
    this.damageVary = 3;
    this.refreshHealth();
  };
  battle.Factory.HexBlade.prototype = new battle.Factory.Drone();
  botTypeList.push("HexBlade");

  //NOTE(adam): bipedal type and subclasses
  battle.Factory.Bipedal = function(name) {
    battle.Factory.Robot.call(this, name);
    this.label = "Bipedal";
    this.refreshHealth();
  };
  battle.Factory.Bipedal.prototype = new battle.Factory.Robot();

  battle.Factory.AtSt = function(name) {
    battle.Factory.Bipedal.call(this, name);
    this.label = `AT-ST ${this.label}`;
    this.healthVary -= 10;
    this.damageVary = 7
    this.refreshHealth();
  };
  battle.Factory.AtSt.prototype = new battle.Factory.Bipedal();
  botTypeList.push("AtSt");

  battle.Factory.T800 = function(name) {
    battle.Factory.Bipedal.call(this, name);
    this.label = `T-800 ${this.label}`;
    this.damageBase += 2;
    this.damageVary = 3;
    this.refreshHealth();
  };
  battle.Factory.T800.prototype = new battle.Factory.Bipedal();
  botTypeList.push("T800");

  //NOTE(adam): atv type and subclasses
  battle.Factory.Atv = function(name) {
    battle.Factory.Robot.call(this, name);
    this.label = "ATV";
    this.healthBase -= 5;
    this.damageBase -= 5;
    this.refreshHealth();
  };
  battle.Factory.Atv.prototype = new battle.Factory.Robot();

  battle.Factory.Rover = function(name) {
    battle.Factory.Atv.call(this, name);
    this.label = `Rover ${this.label}`;
    this.healthBase -= 8;
    this.healthVary = 10;
    this.damageBase -= 2;
    this.damageVary = 4;
    this.refreshHealth();
  };
  battle.Factory.Rover.prototype = new battle.Factory.Atv();
  botTypeList.push("Rover");

  battle.Factory.Maximus = function(name) {
    battle.Factory.Atv.call(this, name);
    this.label = `Maximus ${this.label}`;
    this.healthBase += 10;
    this.healthVary = 4;
    this.damageVary = 5;
    this.refreshHealth();
  };
  battle.Factory.Maximus.prototype = new battle.Factory.Atv();
  botTypeList.push("Maximus");


  return battle;
}(Battledome || {}));
