import { atom, useAtomValue } from "jotai";
import { atomWithReset } from "jotai/utils";
import { Currency, CurrencyObj } from "@/ts/Currency";

export const currencyAtom = atomWithReset<Currency | null>(null);
export const currencyObjAtom = atomWithReset<CurrencyObj | null>(null);


//選択可能な国 通貨コードの小文字で表記
export const AbleChooseCountries = ["jpy", "usd", "cny", "twd", "php", "thb", "aud"];

export const CouCurrncyAtom = atomWithReset<Currency[] | null>(null);