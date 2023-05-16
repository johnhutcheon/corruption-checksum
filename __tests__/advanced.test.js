const checksumAdvanced = require("../advanced_kata");
const data = require("../data");

describe("advanced checksum", () => {
  test("returns 0 when passed an empty array", () => {
    const array = [];
    expect(checksumAdvanced(array)).toEqual(0);
  });
  test("returns the correct answer when passed two divisable numbers", () => {
    const array = [[2, 4]];
    expect(checksumAdvanced(array)).toEqual(2);
  });
  test("returns the correct answer when passed one row of numbers", () => {
    const array = [
      [
        1919, 2959, 82, 507, 3219, 239, 3494, 1440, 3107, 259, 3544, 683, 207,
        562, 276, 2963,
      ],
    ];
    expect(checksumAdvanced(array)).toEqual(13);
  });
  test("returns the correct answer when passed one row of numbers", () => {
    expect(checksumAdvanced(data)).toEqual(314);
  });
});
