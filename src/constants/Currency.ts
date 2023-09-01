//選択可能な国 通貨コードの小文字で表記
export const AbleChooseCountries = ["jpy", "usd", "cny", "twd", "php", "thb", "vnd", "aud"];
export const AbleChooseCountriesUpper = AbleChooseCountries.map((currency) =>
  currency.toUpperCase()
);
export const CurrencyJaNameArray = ["日本円", "アメリカドル", "中国人民元", "ニュー台湾ドル", "フィリピンペソ", "タイバーツ", "ベトナムドン", "オーストラリアドル"];

//codeをKeyとした日本語通貨名のオブジェクト
export const currencyJaNameObj: Record<string, string> = AbleChooseCountriesUpper.reduce(
  (acc: Record<string, string>, currency: string, index: number) => {
    acc[currency] = CurrencyJaNameArray[index];
    return acc;
  },
  {}
);