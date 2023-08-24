"use client";

import React, { useEffect } from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { useAtom } from "jotai";
import {
  AbleChooseCountries,
  CouCurrncyAtom,
  currencyJaName
} from "@/jotai/curracyAtoms";
import { ChooseCountry } from "@/features/currency/chooseCountry";
import Image from "next/image";
import { dateUntilFun } from "@/utils/dateFns";

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
      {couCurrncy && (
        <div className="flex">
          <div className="relative w-full bg-cyan-100 px-4 pb-12 pt-2">
            <i className="absolute -top-8 -left-3">
              <Image
                src="/country/php.png"
                alt="交換元通貨のフラグ"
                width={100}
                height={70}
                priority
              />
            </i>
            <h2 className="text-md font-bold text-right">
              {/* {couCurrncy["php"].code}のコンテンツ */}
              {currencyJaName[couCurrncy["php"].code]}
            </h2>
            <section className="text-center">
              <h3>レート:{couCurrncy["php"].inverseRate.toFixed(5)}</h3>
              <p className="text-xs">更新日（{dateUntilFun(couCurrncy["php"].date)}）</p>
              <input type="text" id="calculation" className="my-4 text-2xl" />
            </section>
          </div>
          <div className="relative w-full bg-fuchsia-100 px-4 pb-12 pt-2">
            <i className="absolute -top-8 -left-3">
              <Image
                src="/country/jpy.png"
                alt="交換目的通貨のフラグ"
                width={100}
                height={70}
                priority
              />
            </i>
            <h2 className="text-md font-bold text-right">日本円のコンテンツ</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrencyWrap;