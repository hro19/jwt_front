import React from "react";
import { Currency, CurrencyObj } from "@/ts/Currency";
import { GetApiCurencyPhp } from "@/api/currency/getApiCurrencyPhp";

const getCurency = GetApiCurencyPhp;

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
