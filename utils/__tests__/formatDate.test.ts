import formatDate from "../formatDate";

describe("formatDate", () => {
  it("format a date correctly", () => {
    const input = "2024-06-01";
    const output = formatDate(input);
    expect(output).toBe("Jun 01, 2024");
  });

  it("format another date correctly", () => {
    const input = "1999-12-31";
    const output = formatDate(input);
    expect(output).toBe("Dec 31, 1999");
  });
});