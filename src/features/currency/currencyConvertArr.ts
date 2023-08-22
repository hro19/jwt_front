//連想配列から配列に変換する関数
export const AssociativeConvert = (currencyObjData: CurrencyObj): Currency[] => {
  return Object.values(currencyObjData);
};

// AbleChooseCountriesでフィルタリングする関数を定義
export const FilterAbleChooseCountries = (
  Currencys: Currency[],
  AbleChooseCountries: string[]
): Currency[] => {
  const upperCaseChooseCountries = AbleChooseCountries.map((code) => code.toUpperCase());

  return Currencys.filter((currencyInfo) =>
    upperCaseChooseCountries.includes(currencyInfo.code)
  );
};