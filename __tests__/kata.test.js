const checksum = require("../kata");
const data = require("../data");

describe("checksum", () => {
  test("returns 0 when passed an empty array", () => {
    const array = [];
    expect(checksum(array)).toEqual(0);
  });
  test("returns correct answer when passed two numbers", () => {
    const array = [[1, 2]];
    expect(checksum(array)).toEqual(1);
  });
  test("returns correct answer when passed one row of numbers", () => {
    const array = [[1, 2, 16, 3, 15, 4, 5, 14, 13, 12, 6, 7, 11, 10, 9, 8]];
    expect(checksum(array)).toEqual(15);
  });
  test("returns correct answer when passed one all data", () => {
    expect(checksum(data)).toEqual(53978);
  });
});
