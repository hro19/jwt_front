import format from "date-fns/format";
import { currencyJaNameObj } from "@/constants/Currency";
import { Currency } from "@/ts/Currency";

export class customCurrency {
  code: string;
  alphaCode: string;
  numericCode: string;
  name: string;
  rate: number;
  date: Date;
  inverseRate: number;

  constructor(currency: Currency) {
    this.code = currency.code;
    this.alphaCode = currency.alphaCode;
    this.numericCode = currency.numericCode;
    this.name = currency.name;
    this.rate = parseFloat(currency.rate.toFixed(5));
    this.date = currency.date;
    this.inverseRate = parseFloat(currency.inverseRate.toFixed(5));
  }

  getCodeLower(): string {
    return this.code.toLowerCase();
  }

  getCurrencyJaName(): string {
    // ここに日本語通貨名の変換ロジックを実装
    return currencyJaNameObj[this.code]; // 適切なロジックを追加
  }

  getDateFun(): string {
    const formattedDateFun = format(new Date(this.date), "yyyy/MM/dd HH:mm");
    return formattedDateFun;
  }

  getDataDay(): string {
    const formattedDateDay = format(new Date(this.date), "yyyy/MM/dd");
    return formattedDateDay;
  }
}

// 使い方の例
// const couCurrncy: { [key: string]: Currency } = {
//   "php": {
//     code: "PHP",
//     alphaCode: "PHP",
//     numericCode: "123",
//     name: "Philippine Peso",
//     rate: 50.123456,
//     date: new Date(),
//     inverseRate: 0.019876,
//   },
// };

// const phpCurrency = new customCurrency(couCurrncy["php"]);
// console.log(phpCurrency);
