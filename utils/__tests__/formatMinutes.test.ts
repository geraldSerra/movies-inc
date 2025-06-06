import formatMinutes from "../formatMinutes";

describe("formatMinutes", () => {
  it("formats 125 minutes as '2 h 5 min'", () => {
    expect(formatMinutes(125)).toBe("2 h 5 min");
  });

  it("formats 60 minutes as '1 h'", () => {
    expect(formatMinutes(60)).toBe("1 h");
  });

  it("formats 59 minutes as '59 min'", () => {
    expect(formatMinutes(59)).toBe("59 min");
  });

  it("formats 0 minutes as '0 min'", () => {
    expect(formatMinutes(0)).toBe("0 min");
  });

  it("formats 240 minutes as '4 h'", () => {
    expect(formatMinutes(240)).toBe("4 h");
  });
});
