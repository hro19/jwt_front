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
import { ChooseCountry } from "@/features/currency/currencyConvertArr";

const CurrencyWrap = ({ currencyObjData }: { currencyObjData: CurrencyObj }) => {
  const [couCurrncy, setCouCurrncy] = useAtom(CouCurrncyAtom);

  // CurrencyWrapコンポーネント内でのuseEffectの中身
  useEffect(() => {
    const chooseCountry: ReturnType<typeof ChooseCountry> = ChooseCountry(
      currencyObjData,
      AbleChooseCountries
    );
    //console.table(chooseCountry);
    setCouCurrncy(chooseCountry);
  }, [currencyObjData]);

  return (
    <>
      <ul>
        {couCurrncy &&
          couCurrncy.map((currencyInfo: Currency, index: number) => (
            <li key={index}>
              <p>
                【コード】{currencyInfo.code} -【名前】{currencyInfo.name}(
                <span className="text-lime-600">{currencyJaName[currencyInfo.code]}</span>
                )
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
