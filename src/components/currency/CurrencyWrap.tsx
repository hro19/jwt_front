"use client";

import React, { useEffect,useState } from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { useAtom } from "jotai";
import {CouCurrncyAtom} from "@/jotai/curracyAtoms";
import { AbleChooseCountries } from "@/constants/Currency";
import { ChooseCountry } from "@/features/currency/chooseCountry";
import Image from "next/image";
import { customCurrency } from "@/class/customCurrency";

const CurrencyWrap = ({ currencyObjData }: { currencyObjData: CurrencyObj }) => {
  // console.log("🚀 ~ file: CurrencyWrap.tsx:16 ~ CurrencyWrap ~ currencyObjData:", currencyObjData)
  const [couCurrncy, setCouCurrncy] = useAtom(CouCurrncyAtom);
  const [phpCurrency, setPhpCurrency] = useState<customCurrency | null>(null);

  useEffect(() => {
    // AbleChooseCountriesに含まれる通貨コードのみを含む新しいオブジェクトを作成
    const filteredCurrenciesArray: CurrencyObj = ChooseCountry(
      currencyObjData,
      AbleChooseCountries
    );

    //console.table(filteredCurrenciesArray);
    setCouCurrncy(filteredCurrenciesArray);
  }, [currencyObjData]);

  useEffect(() => {
    if (couCurrncy !== null) {
      const phpCur = new customCurrency(couCurrncy["php"]);
      console.log("🚀 ~ file: CurrencyWrap.tsx:31 ~ useEffect ~ const:", phpCur);
      setPhpCurrency(phpCur);
    }
  }, [couCurrncy]);


  return (
    <>
      {phpCurrency && (
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
              <h3 className="text-lg font-bold">
                {phpCurrency.getCurrencyJaName()}のレート
                <br />
                {phpCurrency.inverseRate.toString()}
              </h3>
              <span className="text-xs block">更新日（{phpCurrency.getDateFun()}）</span>

              <input
                type="text"
                id="name"
                placeholder="商品名"
                className="my-4 text-2xl border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                id="local_price"
                placeholder="商品現地価格"
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
      <div className="flex justify-center mt-10 mx-auto">
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">商品名</th>
              <th className="px-4 py-2">国名</th>
              <th className="px-4 py-2">レート計算日時</th>
              <th className="px-4 py-2">現地価格</th>
              <th className="px-4 py-2">日本円価格</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Product A</td>
              <td className="border px-4 py-2">USD</td>
              <td className="border px-4 py-2">2023-08-25 12:00:00</td>
              <td className="border px-4 py-2">$100.00</td>
              <td className="border px-4 py-2">¥11,000.00</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Product B</td>
              <td className="border px-4 py-2">EUR</td>
              <td className="border px-4 py-2">2023-08-25 13:30:00</td>
              <td className="border px-4 py-2">$75.50</td>
              <td className="border px-4 py-2">¥9,000.00</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CurrencyWrap;