import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  // console.log("XYZ: ",currency);
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

  const [data, setData] = useState({"none" :-1});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
//  console.table(data)
  return data 
}


export default useCurrencyInfo