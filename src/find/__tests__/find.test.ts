import { find } from "../find";

describe("Tets", () => {
  it("Tets", () => {
    expect(find([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1297)).toBe(11);
  });
  it("Tets", () => {
    expect(find([0, 1, 2, 9, 7, 5, 6, 3, 8, 4], 1297)).toBe(4);
  });
});
