export type Currency = {
  code: string;
  alphaCode: string;
  numericCode: string;
  name: string;
  rate: number;
  date: Date;
  inverseRate: number;
};

export type CurrencyObj = {
  [currencyCode: string]: Currency;
};

//メインで使う要素だけを取り出す
type CurrencyMainUnion = "code" | "name" | "rate" | "date" | "inverseRate";
export type CurrencyMain = Pick<Currency, CurrencyMainUnion>;

//メインで使う要素+日本語訳を付ける
// jp_codeがJPY → 日本　　　　jp_codeがUSD → アメリカ合衆国
// jp_nameがJapanese Yen → 円　　　jp_nameがu.s Dollar → ドル
type CurrencyJaUnion = "jp_code" | "jp_name";  
export type CurrencyAddJa = Currency & Record<CurrencyJaUnion, string>;
