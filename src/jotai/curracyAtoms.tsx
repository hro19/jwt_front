import { atom, useAtomValue } from "jotai";
import { atomWithReset } from "jotai/utils";
import { Currency, CurrencyObj } from "@/ts/Currency";

export const currencyAtom = atomWithReset<Currency | null>(null);
export const currencyObjAtom = atomWithReset<CurrencyObj | null>(null);


//選択可能な国 通貨コードの小文字で表記
export const AbleChooseCountries = ["jpy", "usd", "cny", "twd", "php", "thb", "vnd", "aud"];
export const AbleChooseCountriesUpper = AbleChooseCountries.map((currency) =>
  currency.toUpperCase()
);
export const CurrencyJaNameArray = ["日本円", "アメリカドル", "中国人民元", "ニュー台湾ドル", "フィリピンペソ", "タイバーツ", "ベトナムドン", "オーストラリアドル"];

//codeをKeyとした日本語通貨名のオブジェクト
export const currencyJaName: Record<string, string> = AbleChooseCountriesUpper.reduce(
  (acc: Record<string, string>, currency: string, index: number) => {
    acc[currency] = CurrencyJaNameArray[index];
    return acc;
  },
  {}
);

//オリジナルの通貨データから項目を絞り込む
export const currencyMainKey: (keyof Currency)[] = [
  "code","name","rate","date","inverseRate"];


export const CouCurrncyAtom = atomWithReset<Currency []| null>(null);