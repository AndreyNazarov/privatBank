import { useState, useEffect } from 'react';
import * as HomePageApi from '../services/ApiGenerator';
import s from '../styles/CurrencyRow.module.css';
import CurrencyRow from './CurrencyRow';
import CurrencyOptions from './CurrencyOptions';

export default function CurrencyPage() {
  const [baseUanCurrencyOption, setBaseUanCurrencyOption] = useState([]);
  const [currencyOption, setCurrencyOption] = useState([]);
  useEffect(() => {
    HomePageApi.fetchCurrencyWithPrivat().then(data => {
      const currencyOption = data;

      const uanData = [...Object.values(data.map(item => item.base_ccy))];
      setCurrencyOption(currencyOption);
      setBaseUanCurrencyOption(uanData);
    });
  }, []);
  const getCurrencyCcy = currencyOption.map(currency => {
    return currency.ccy;
  });
  const getCurrencyBaseCcy = currencyOption.map(currency => {
    return currency.base_ccy;
  });

  return (
    <>
      <h1 className={s.header}>Currency Converter</h1>

      <CurrencyOptions
        getCurrencyCcy={getCurrencyCcy}
        getCurrencyBaseCcy={getCurrencyBaseCcy}
        currencyOption={currencyOption}
      />
    </>
  );
}
