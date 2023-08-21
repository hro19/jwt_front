"use client";

import React, { useEffect } from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { useAtom } from "jotai";
import {
  AbleChooseCountries,
  CouCurrncyAtom,
} from "@/jotai/curracyAtoms";

//連想配列から配列に変換する関数
const AssociativeConvert = (currencyObjData: CurrencyObj): Currency[] => {
  return Object.values(currencyObjData);
};

// AbleChooseCountriesでフィルタリングする関数を定義
const filterAbleChooseCountries = (
  Currencys: Currency[],
  AbleChooseCountries: string[]
): Currency[] => {
  const upperCaseChooseCountries = AbleChooseCountries.map((code) => code.toUpperCase());

  return Currencys.filter((currencyInfo) =>
    upperCaseChooseCountries.includes(currencyInfo.code)
  );
};

const CurrencyWrap = ({ currencyObjData }: { currencyObjData: CurrencyObj }) => {
  const [couCurrncy, setCouCurrncy] = useAtom(CouCurrncyAtom);

  // CurrencyWrapコンポーネント内でのuseEffectの中身
  useEffect(() => {
    const associativeConvertArr: Currency[] = AssociativeConvert(currencyObjData);

    // AbleChooseCountriesでフィルタリングする関数を呼び出す
    const filteredCurrenciesArray = filterAbleChooseCountries(
      associativeConvertArr,
      AbleChooseCountries
    );

    console.table(filteredCurrenciesArray);
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
