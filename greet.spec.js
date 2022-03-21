import { greet } from "./greet";

describe("test for the greet function", () => {
  it("if the name equal Thomas or Martin or Stefan return 'Hello Coach'", () => {
    const result = greet("Thomas");
    expect(result).toBe("Hello Coach!");
  });
});
