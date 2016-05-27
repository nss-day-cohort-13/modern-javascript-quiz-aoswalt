describe("Battledome", function() {
  it("should exist", function() {
    expect(Battledome).toBeDefined();
  });

  xdescribe("fight", function() {
    it("should exist", function() {
      expect(Battledome.fight).toBeDefined();
    });
  });

  xdescribe("Factory", function() {
    it("should exist", function() {
      expect(Battledome.Factory).toBeDefined();
    });

    xdescribe("Robot", function() {
      it("should exist", function() {
        expect(Battledome.Factory.Robot).toBeDefined();
      });

      xdescribe("isAlive", function() {
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

      xdescribe("attack", function() {
        it("should exist", function() {
          expect(Battledome.Factory.Robot.prototype.attack).toBeDefined();
        });

        xit("should damage opponent", function() {
          //TODO(adam): check opponent health lowered
        });
      });

      xdescribe("Drone", function() {
        it("should exist", function() {
          expect(Battledome.Factory.Drone).toBeDefined();
        });

        xdescribe("QuadCopter", function() {
          it("should exist", function() {
            expect(Battledome.Factory.QuadCopter).toBeDefined();
          });
        });

        xdescribe("HexBlade", function() {
          it("should exist", function() {
            expect(Battledome.Factory.HexBlade).toBeDefined();
          });
        });
      });

      xdescribe("Bipedal", function() {
        it("should exist", function() {
          expect(Battledome.Factory.Bipedal).toBeDefined();
        });

        xdescribe("AtSt", function() {
          it("should exist", function() {
            expect(Battledome.Factory.AtSt).toBeDefined();
          });
        });

        xdescribe("T800", function() {
          it("should exist", function() {
            expect(Battledome.Factory.T800).toBeDefined();
          });
        });
      });

      xdescribe("ATV", function() {
        it("should exist", function() {
          expect(Battledome.Factory.Atv).toBeDefined();
        });

        xdescribe("Rover", function() {
          it("should exist", function() {
            expect(Battledome.Factory.Rover).toBeDefined();
          });
        });

        xdescribe("Maximus", function() {
          it("should exist", function() {
            expect(Battledome.Factory.Maximus).toBeDefined();
          });
        });
      });
    });
  });
});
