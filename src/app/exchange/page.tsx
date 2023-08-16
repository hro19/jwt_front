"use client";

import React, { useEffect } from "react";
import exchangeratesapi from "@ittkm/exchangeratesapi-wrapper";

const API_KEY = "1f38411a0ff8a3359cd4baae0b753b3f";

const Page = () => {
  useEffect(() => {
    async function exchangeratesapiSamples() {
      const api = new exchangeratesapi(API_KEY);
      const exchangeRates = await api.latest();
      console.dir(exchangeRates);
    }

    exchangeratesapiSamples();
  }, []); // 空の配列を依存リストとして渡すことで、初回のみ実行される

  return <div>ddd</div>;
};

export default Page;
