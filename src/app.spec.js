const app = require("./app.js");

describe(
"Tesiting app.js",
() => {
  it(
"should return input parameter",
() => {
    const output = app.testFunc("test");

    expect(output).toEqual("test");
  }
);
}
);
