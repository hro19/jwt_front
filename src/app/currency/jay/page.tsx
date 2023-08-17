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
    <div>
      <h2 className="text-lg font-bold mt-4">日本から見た通貨一覧</h2>
      <CurrencyWrap currencyObjData={currencyObjData} />
    </div>
  );
};

export default UsersList;
