describe("Battledome", function() {
  it("should exist", function() {
    expect(Battledome).toBeDefined();
  });

  describe("fight", function() {
    it("should exist", function() {
      expect(Battledome.fight).toBeDefined();
    });
  });

  describe("Factory", function() {
    it("should exist", function() {
      expect(Battledome.Factory).toBeDefined();
    });

    describe("Robot", function() {
      it("should exist", function() {
        expect(Battledome.Factory.Robot).toBeDefined();
      });

      describe("isAlive", function() {
        it("should exist", function() {
          expect(Battledome.Factory.Robot.prototype.isAlive).toBeDefined();
        });

        it("should check health", function() {
          let robot = new Battledome.Factory.Robot();
          expect(robot.isAlive()).toBeTruthy();
          robot.health = 0;
          expect(robot.isAlive()).toBeFalsy();
        });
      });

      describe("attack", function() {
        it("should exist", function() {
          expect(Battledome.Factory.Robot.prototype.attack).toBeDefined();
        });

        xit("should damage opponent", function() {
          //TODO(adam): check opponent health lowered
        });
      });

      describe("Drone", function() {
        it("should exist", function() {
          expect(Battledome.Factory.Drone).toBeDefined();
        });

        describe("QuadCopter", function() {
          it("should exist", function() {
            expect(Battledome.Factory.QuadCopter).toBeDefined();
          });
        });

        describe("HexBlade", function() {
          it("should exist", function() {
            expect(Battledome.Factory.HexBlade).toBeDefined();
          });
        });
      });

      describe("Bipedal", function() {
        it("should exist", function() {
          expect(Battledome.Factory.Bipedal).toBeDefined();
        });

        describe("AtSt", function() {
          it("should exist", function() {
            expect(Battledome.Factory.AtSt).toBeDefined();
          });
        });

        describe("T800", function() {
          it("should exist", function() {
            expect(Battledome.Factory.T800).toBeDefined();
          });
        });
      });

      describe("ATV", function() {
        it("should exist", function() {
          expect(Battledome.Factory.Atv).toBeDefined();
        });

        describe("Rover", function() {
          it("should exist", function() {
            expect(Battledome.Factory.Rover).toBeDefined();
          });
        });

        describe("Maximus", function() {
          it("should exist", function() {
            expect(Battledome.Factory.Maximus).toBeDefined();
          });
        });
      });
    });
  });
});
