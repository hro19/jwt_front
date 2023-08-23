import { Currency, CurrencyObj } from "@/ts/Currency";

//選択した国だけピックアップして配列に並び替える
//第一引数 ある通貨のオブジェクト
//第二引数 ピックアップしたい国の配列アレイ

export const ChooseCountry = (
  currencyObjData: CurrencyObj,
  countryArr: string[]
): Currency[] => {
  const associativeConvertArr: Currency[] = AssociativeConvert(currencyObjData);

  // AbleChooseCountriesでフィルタリングする関数を呼び出す
  const filteredCurrenciesArray = FilterAbleChooseCountries(
    associativeConvertArr,
    countryArr
  );
  return filteredCurrenciesArray;
};

//連想配列から配列に変換する関数
const AssociativeConvert = (currencyObjData: CurrencyObj): Currency[] => {
  return Object.values(currencyObjData);
};

// AbleChooseCountriesでフィルタリングする関数を定義
const FilterAbleChooseCountries = (
  Currencys: Currency[],
  countryArr: string[]
): Currency[] => {
  const upperCaseChooseCountries = countryArr.map((code) => code.toUpperCase());

  return Currencys.filter((currencyInfo) =>
    upperCaseChooseCountries.includes(currencyInfo.code)
  );
};
