import React from "react";
import { CurrencyObj } from "@/ts/Currency";
import CurrencyWrap from "@/components/currency/CurrencyWrap";

const getCurency = async (): Promise<CurrencyObj> => {
  const response = await fetch("https://www.floatrates.com/daily/jpy.json", {
    cache: "no-store",
  });
  const currencyObj: CurrencyObj = await response.json();
  return currencyObj;
};

const UsersList = async () => {
  const currencyObjData = await getCurency();

  return (
    <div className="mx-auto w-full max-w-[860px] py-8">
      <h2 className="text-center text-lg font-bold mb-12">日本円への通貨計算</h2>
      <CurrencyWrap currencyObjData={currencyObjData} />
    </div>
  );
};

export default UsersList;
