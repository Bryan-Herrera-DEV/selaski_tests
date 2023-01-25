import { find } from "../find";

describe("Tets Function", () => {
  it("Tets first case", () => {
    expect(find([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1297)).toBe(11);
  });
});
