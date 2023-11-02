import { dateFormatter } from "../../utils/dateFns";

describe("関数dateFormatterのテスト", () => {
  it("年", () => {
    expect(dateFormatter.Year(new Date())).toBe("2023");
  });

  it("年月", () => {
    expect(dateFormatter.Month(new Date())).toBe("2023/11");
  });
  
});
