"use client";

import React, { useEffect } from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { useAtom } from "jotai";
import {
  AbleChooseCountries,
  CouCurrncyAtom,
  currencyJaName,
} from "@/jotai/curracyAtoms";
import { dateUntilFun } from "@/utils/dateFns";

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
    // console.log(currencyJaName);
    const associativeConvertArr: Currency[] = AssociativeConvert(currencyObjData);

    // AbleChooseCountriesでフィルタリングする関数を呼び出す
    const filteredCurrenciesArray = filterAbleChooseCountries(
      associativeConvertArr,
      AbleChooseCountries
    );

    //console.table(filteredCurrenciesArray);
    setCouCurrncy(filteredCurrenciesArray);
  }, [currencyObjData]);

  return (
    <>
      <ul>
        {couCurrncy &&
          couCurrncy.map((currencyInfo: Currency, index: number) => (
            <li key={index}>
              <p>
                【コード】{currencyInfo.code} -【名前】{currencyInfo.name}(
                {currencyJaName[currencyInfo.code]})
              </p>
              <p>【レート】{currencyInfo.rate.toFixed(6)}</p>
              <p>【日付】{dateUntilFun(currencyInfo.date)}</p>
              <p>【両替レート】{currencyInfo.inverseRate.toFixed(6)}</p>
              <hr />
            </li>
          ))}
      </ul>
    </>
  );
};

export default CurrencyWrap;
