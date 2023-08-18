"use client";

import React, { useEffect } from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { useAtom } from "jotai";
import {
  AbleChooseCountries,
  CouCurrncyAtom,
} from "@/jotai/curracyAtoms";

const CurrencyWrap = ({ currencyObjData }: { currencyObjData: CurrencyObj }) => {
  const [couCurrncy, setCouCurrncy] = useAtom(CouCurrncyAtom);

  useEffect(() => {
    const filteredCurrenciesArray: Currency[] = Object.entries(currencyObjData)
      .filter(([currencyCode]) => AbleChooseCountries.includes(currencyCode))
      .map(([, currencyInfo]) => currencyInfo); // 明示的な型変換
    // console.table(filteredCurrenciesArray);
    setCouCurrncy(filteredCurrenciesArray);
  }, [currencyObjData]);

  return (
    <>
      <ul>
        {couCurrncy &&
          couCurrncy.map((currencyInfo: Currency, index: number) => (
            <li key={index}>
              <strong>{currencyInfo.code}</strong> - {currencyInfo.name} (
              {currencyInfo.rate})
            </li>
          ))}
      </ul>
    </>
  );
};

export default CurrencyWrap;
