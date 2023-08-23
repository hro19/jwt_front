"use client";

import React, { useEffect } from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { useAtom } from "jotai";
import {
  AbleChooseCountries,
  CouCurrncyAtom,
} from "@/jotai/curracyAtoms";
import { ChooseCountry } from "@/features/currency/chooseCountry";

const CurrencyWrap = ({ currencyObjData }: { currencyObjData: CurrencyObj }) => {
  const [couCurrncy, setCouCurrncy] = useAtom(CouCurrncyAtom);

  useEffect(() => {
    // AbleChooseCountriesに含まれる通貨コードのみを含む新しいオブジェクトを作成
    const filteredCurrenciesArray: CurrencyObj = ChooseCountry(
      currencyObjData,
      AbleChooseCountries
    );

    console.table(filteredCurrenciesArray);
    setCouCurrncy(filteredCurrenciesArray);
  }, [currencyObjData]);

  return (
    <>
      <ul>
        {couCurrncy && (
          <li key={couCurrncy["php"].code}>
            <strong>{couCurrncy["php"].code}</strong> - {couCurrncy["php"].name} (
            {couCurrncy["php"].rate})
          </li>
        )}
      </ul>
    </>
  );
};

export default CurrencyWrap;