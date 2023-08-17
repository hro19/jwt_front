import React from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { useAtom } from "jotai";
import { verifyUserAtom } from "@/jotai/userAtoms";

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
      <ul>
        {currencyObjData &&
          Object.entries(currencyObjData).map(
            ([currencyCode, currencyInfo]: [string, Currency]) => (
              <li key={currencyCode}>
                <strong>{currencyCode}</strong> - {currencyInfo.name} ({currencyInfo.rate}
                )
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default UsersList;
