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
              <p>
                【コード】{currencyInfo.code} -【名前】{currencyInfo.name}
              </p>
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
