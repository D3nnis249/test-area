import { greet } from "./greet.js";

describe("test for the greet function", () => {
  it("if the name equal Thomas or Martin or Stefan return 'Hello Coach'", () => {
    const result = greet("Thomas");
    expect(result).toBe("Hello Coach!");
  });
});

describe("test for the greet function", () => {
  it("if the name equal Thomas or Martin or Stefan return 'Hello Coach'", () => {
    const result = greet("Martin");
    expect(result).toBe("Hello Coach!");
  });
});

describe("test for the greet function", () => {
  it("if the name  equal Thomas or Martin or Stefan return 'Hello Coach'", () => {
    const result = greet("Stefan");
    expect(result).toBe("Hello Coach!");
  });
});

describe("test for the greet function", () => {
  it("if the name NOT equal Thomas or Martin or Stefan return 'Hello Coach'", () => {
    const result = greet("Peter");
    expect(result).toBe("Hello stranger!");
  });
});

describe("test for the greet function", () => {
  it("if the name NOT equal Thomas or Martin or Stefan return 'Hello Coach'", () => {
    const result = greet("Dennis");
    expect(result).toBe("Hello stranger!");
  });
});

describe("test for the greet function", () => {
  it("if the name NOT equal Thomas or Martin or Stefan return 'Hello Coach'", () => {
    const result = greet("Alex");
    expect(result).toBe("Hello stranger!");
  });
});
