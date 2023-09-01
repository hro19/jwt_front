import { atom, useAtomValue } from "jotai";
import { atomWithReset } from "jotai/utils";
import { Currency, CurrencyObj } from "@/ts/Currency";

export const currencyAtom = atomWithReset<Currency | null>(null);
// export const currencyObjAtom = atomWithReset<CurrencyObj | null>(null);


//オリジナルの通貨データから項目を絞り込む
export const currencyMainKey: (keyof Currency)[] = [
  "code","name","rate","date","inverseRate"];


export const CouCurrncyAtom = atomWithReset<CurrencyObj | null>(null);