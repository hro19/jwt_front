import React from "react";
import { Currency,CurrencyObj } from "@/ts/Currency";

const getCurency = async (): Promise<CurrencyObj> => {
  const response = await fetch("https://www.floatrates.com/daily/php.json", {
    cache: "no-store",
  });
  const phpCur = await response.json();
  return phpCur;
};

const UsersList = async () => {
  const phpCur: Awaited<Promise<CurrencyObj>> = await getCurency();
  return (
    <div>
      <h2 className="text-lg font-bold mt-4">フィリピンから見た通貨一覧</h2>
      <ul>
        {phpCur &&
          Object.entries(phpCur).map(
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
