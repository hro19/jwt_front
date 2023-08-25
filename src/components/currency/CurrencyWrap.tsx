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
          <div className="relative w-full bg-cyan-100 px-4 py-12">
            <i className="absolute top-3 left-2">
              <Image
                src="/country/php.png"
                alt="交換元通貨のフラグ"
                width={80}
                height={55}
                priority
              />
            </i>
            <section className="text-center">
              <h3>
                {currencyJaName[couCurrncy["php"].code]}のレート
                <br />
                {couCurrncy["php"].inverseRate.toFixed(5)}
              </h3>
              <p className="text-xs">更新日（{dateUntilFun(couCurrncy["php"].date)}）</p>
              <input
                type="text"
                id="calculation"
                className="my-4 text-2xl border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </section>
          </div>
          <div className="relative w-full bg-fuchsia-100 px-4 py-12">
            <i className="absolute top-3 left-2">
              <Image
                src="/country/jpy.png"
                alt="交換目的通貨のフラグ"
                width={80}
                height={55}
                priority
              />
            </i>
            {/* <h2 className="text-md font-bold text-right">日本円のコンテンツ</h2> */}
            <section className="grid place-content-center place-items-center h-full">
              <h3 className="mb-3">両替時の日本円</h3>
              <p className="text-4xl">
                {Math.floor(432300).toLocaleString("ja-JP")}
                <span className="text-sm">円</span>
              </p>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrencyWrap;