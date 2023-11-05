import { dateFormatter } from "../../utils/dateFns";
import { format } from "date-fns";

describe("関数dateFormatterのテスト", () => {
  it("年", () => {
    expect(dateFormatter.Year(new Date())).toBe("2023");
  });

  it("年月", () => {
    expect(dateFormatter.Month(new Date())).toBe("2023/11");
  });
  
});


describe("dateFormatter", () => {
  const created_at = new Date();

  it("Byou", () => {
    const result = dateFormatter.Byou(created_at);
    expect(result).toBe(format(created_at, "yyyy/MM/dd HH:mm:ss"));
  });

  it("Fun", () => {
    const result = dateFormatter.Fun(created_at);
    expect(result).toBe(format(created_at, "yyyy/MM/dd HH:mm"));
  });

  it("Zi", () => {
    const result = dateFormatter.Zi(created_at);
    expect(result).toBe(format(created_at, "yyyy/MM/dd HH"));
  });

  it("DayJap", () => {
    const result = dateFormatter.DayJap(created_at);
    expect(result).toBe(format(created_at, "yy年M月d日"));
  });

  it("MonthDay", () => {
    const result = dateFormatter.MonthDay(created_at);
    expect(result).toBe(format(created_at, "MM/dd"));
  });

  it("Month", () => {
    const result = dateFormatter.Month(created_at);
    expect(result).toBe(format(created_at, "yyyy/MM"));
  });

  it("Yearその1", () => {
    const result = dateFormatter.Year(created_at);
    expect(result).toBe(format(created_at, "yyyy"));
  });
  it("Yearその2", () => {
    const result2 = dateFormatter.Year(new Date("2018/01/14"));
    expect(result2).toBe("2018");
  });
});
