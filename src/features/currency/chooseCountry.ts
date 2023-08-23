import { Currency, CurrencyObj } from "@/ts/Currency";

export const ChooseCountry = (
  currencyObjData: CurrencyObj,
  ChooseArr: string[]
): CurrencyObj => {
  return Object.fromEntries(
    Object.entries(currencyObjData).filter(([currencyCode]) =>
      ChooseArr.includes(currencyCode)
    )
  );
};
