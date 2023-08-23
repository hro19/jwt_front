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
      <div className="mx-auto w-full max-w-[860px]">
        <div className="flex">
          <div className="w-full bg-cyan-100">
            <h2>フィリピンペソのコンテンツ</h2>
          </div>
          <div className="w-full bg-fuchsia-100">
            <h2>日本円のコンテンツ</h2>
          </div>
        </div>
      </div>
      {/* {couCurrncy && (
          <p key={couCurrncy["php"].code}>
            <strong>{couCurrncy["php"].code}</strong> - {couCurrncy["php"].name} (
            {couCurrncy["php"].rate})
          </p>
        )} */}
    </>
  );
};

export default CurrencyWrap;