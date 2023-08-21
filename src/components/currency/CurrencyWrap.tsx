"use client";

import React, { useEffect } from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { useAtom } from "jotai";
import {
  AbleChooseCountries,
  CouCurrncyAtom,
  currencyMainKey,
} from "@/jotai/curracyAtoms";

//連想配列を配列に変換する（途中で国のピッキングする）
const filterCurrencies = (
  currencyObjData: CurrencyObj,
  AbleChooseCountries: string[]
): Currency[] => {
  return Object.entries(currencyObjData)
    .filter(([currencyCode]) => filterCurrencyCode(currencyCode, AbleChooseCountries))
    .map(([, currencyInfo]) => currencyInfo);
};

//事前に選ばれた国かをチェックする
const filterCurrencyCode = (
  currencyCode: string,
  AbleChooseCountries: string[]
): boolean => {
  return AbleChooseCountries.includes(currencyCode);
};

//メインとするキーのみ表示させる
const filterMainInfo = (
  currencyInfo: Currency,
  currencyMainKey: (keyof Currency)[]
): Partial<Currency> => {
  const filteredCurrencyInfo: Record<any, any> = {};
  for (const key of currencyMainKey) {
    filteredCurrencyInfo[key] = currencyInfo[key];
  }
  return filteredCurrencyInfo;
};

const CurrencyWrap = ({ currencyObjData }: { currencyObjData: CurrencyObj }) => {
  const [couCurrncy, setCouCurrncy] = useAtom(CouCurrncyAtom);

  useEffect(() => {
    const filteredCurrenciesArray: Currency[] = filterCurrencies(
      currencyObjData,
      AbleChooseCountries
    );


    const mainCurrenciesArray = filteredCurrenciesArray.map((mainInfoObj) =>
      filterMainInfo(mainInfoObj, currencyMainKey)
    );
    
    // console.table(filteredCurrenciesArray);
    setCouCurrncy(mainCurrenciesArray);
  }, [currencyObjData]);

  return (
    <>
      <ul>
        {couCurrncy &&
          couCurrncy.map((currencyInfo: Currency, index: number) => (
            <li key={index}>
              <p>【コード】{currencyInfo.code} -【名前】{currencyInfo.name}</p>
              <p>【レート】{currencyInfo.rate}</p>
              <p>【日付】{currencyInfo.date.toString()}</p>
              <p>【両替レート】{currencyInfo.inverseRate}</p>
              <hr />
            </li>
          ))}
      </ul>
    </>
  );
};

export default CurrencyWrap;
