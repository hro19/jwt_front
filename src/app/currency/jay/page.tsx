import React from "react";

const getCurency = async () => {
  const response = await fetch("https://www.floatrates.com/daily/jpy.json", {
    cache: "no-store",
  });
  const phpCur = await response.json();
  return phpCur;
};

const UsersList = async () => {
  const phpCur = await getCurency();
  return (
    <div>
      <h2 className="text-lg font-bold mt-4">日本から見た通貨一覧</h2>
      <ul>
        {phpCur &&
          Object.entries(phpCur).map(([currencyCode, currencyInfo]: any) => (
            <li key={currencyCode}>
              <strong>{currencyCode}</strong> - {currencyInfo.name} ({currencyInfo.rate})
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UsersList;
