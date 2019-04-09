import { assert } from "chai";
import {
  add,
  subtract,
  divide,
  multiply,
  areSameLength,
  areEqual,
  isEven,
  isOdd,
  roundNumber
} from "./index";
import { exportAllDeclaration } from "@babel/types";

describe("Math Functions", () => {
  describe("add", () => {
    //The following tests all pass great!
    it("should be a function", () => {
      assert.isFunction(add);
    });
    it("should return a number", () => {
      assert.isNumber(add(2, 3));
    });
    it("should properly add two numbers", () => {
      assert.equal(add(2, 3), 5);
    });
  });

  describe("subtract", () => {
    describe('subtract', () => {
      it("should be a function", () => {
        assert.isFunction(subtract, "numbers as params");
      });
      it("should return a number", () => {
        assert.isNumber( subtract(5,4) )
      })
      it("should properly subtract two numbers", () => {
        assert.equal(subtract(3, 2), 1);
        assert.equal(subtract(-10, 2), -12);
        assert.equal(subtract(15, -2), 17);
        assert.equal(subtract(-5, -7), 2);
      });
    });
  })

  describe("divide", () => {
    it("should be a function", () => {
      assert.isFunction(divide, "numbers as params");
    });
    it("should return a number", () => {
      assert.isNumber(6, 2);
    });
    it("should return Infinity if we divide by 0", () => {
      assert.equal(divide(5, 0), Infinity);
      assert.equal(divide(Infinity, 0), Infinity);
    });
    it("should return -Infinity if we divide negative number by 0", () => {
      assert.equal(divide(-20, 0), -Infinity);
    });
  });

  describe("multiply", () => {
    it("should be a function", () => {
      assert.isFunction(multiply, "numbers as params");
    });
    it("should return a number", () => {
      assert.isNumber( multiply(6,5));
    });
    it("should properly multiply numbers", () => {
      assert.equal(multiply(5, 2), 10);
      assert.equal(multiply(25, 25), 625);
      assert.equal(multiply(-242, -2), 484)
    });
  });

  describe("areSameLength", () => {
    it("should be a function", () => {
      assert.isFunction(areSameLength, "strings as params");
    });
    it("should return a boolean", () => {
      assert.isBoolean(areSameLength("hello", "world"), "hello and world are same length");
    });
    it("should return true if both strings are the same length", () => {
      assert.isTrue(areSameLength("hello", "world"), " `Hello` and `world` are both length 5");
      assert.isTrue(areSameLength("l33tc0de", "sw33333t"));
    });
    it("should return false if strings have different lengths", () => {
      assert.isFalse(areSameLength("hello", "goodbye"));
      assert.isFalse(areSameLength("Twitter", "Computer"));
    });
  });

  describe("areEqual", () => {
    it("should be a function", () => {
      assert.isFunction(areEqual, "numbers as params");
    });
    it("should return a boolean", () => {
      assert.isBoolean(areEqual(51,2), "numbers");
    });
    it("should return true if both numbers are the same", () => {
      assert.isTrue(areEqual(2, 2));
    });
    it("should return false if the numbers are different", () => {
      assert.isFalse(areEqual(1, 2));
    });
  });

  describe("isEven", () => {
    it("should be a function", () => {
      assert.isFunction(isEven, "number as param");
    });
    it("should return a boolean", () => {
      assert.isBoolean(areEqual(4), "return true");
    });
    it("should return true if number is even", () => {
      assert.isTrue(isEven(0));
      assert.isTrue(isEven(122));
      assert.isTrue(isEven(-202));
    });
    it ("should return false if number is odd", () => {
      assert.isFalse(isEven(5));
      assert.isFalse(isEven(-31));
      assert.isFalse(isEven(5/2));
    });
  });

  describe("isOdd", () => {
    it("should be a function", () => {
      assert.isFunction(isOdd, "number as param");
    });
    it("should return a boolean", () => {
      assert.isBoolean(isOdd(31), "returns true");
    });
    it("should return true if the number is odd", () => {
      assert.isTrue(isOdd(1231))
    });
    it("should return false if the number is even", () => {
      assert.isFalse(isOdd(50));
      assert.isFalse(isOdd(222225550));
    });
  });

  describe("roundNumber", () => {
    it("should be a function", () => {
      assert.isFunction(roundNumber, "number as param");
    });
    it("should return a number", () => {
      assert.isNumber(roundNumber(1.5))
    });
    it("should round up when needed", () => {
      assert.equal(roundNumber(1.5), 2);
      assert.equal(roundNumber(2.501), 3);
    });
    it("should round down when needed", () => {
      assert.equal(roundNumber(0.5), 1);
      assert.equal(roundNumber(1.49), 1);
    });
  });
});
