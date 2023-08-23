"use client";

import React, { useEffect } from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { useAtom } from "jotai";
import {
  AbleChooseCountries,
  currencyObjAtom,
  CouCurrncyAtom,
} from "@/jotai/curracyAtoms";

const CurrencyWrap = ({ currencyObjData }: CurrencyObj) => {
  const [couCurrncy, setCouCurrncy] = useAtom(CouCurrncyAtom);

  useEffect(() => {
    const filteredCurrenciesArray:any = currencyObjData
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