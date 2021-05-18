import s from '../styles/CurrencyRow.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, lazy, Suspense } from 'react';
import * as HomePageApi from '../services/ApiGenerator';
import { Route, useHistory } from 'react-router-dom';
import BackButton from './Button';
import BtnHistory from './BtnHistory';
export default function CurrencyRow() {
  let history = useHistory();
  // беру id(ccy) валюты из CurrencyOptions
  const userId = history.location.state;
  const [currencyOption, setCurrencyOption] = useState([]);
  const [ccyCurrencyOption, setCcyCurrencyOption] = useState([]);
  const [ccyBaseCurrencyOption, setCcyBaseCurrencyOption] = useState([]);

  const [amount, setAmount] = useState({});
  const [amountBuy, setBuyAmount] = useState({});
  // сюда приходит дата когда нажимаю на кнопку
  const [storageBuy, setStorageBuy] = useState(() => {
    return JSON.parse(window.localStorage.getItem('amountBuy'));
  });
  const [storageSale, setStorageSale] = useState(() => {
    return JSON.parse(window.localStorage.getItem('amountSale'));
  });
  // console.log('storageBuy', storageBuy);
  const [exchange, setExchange] = useState();
  const [exchangeBuy, setBuyExchange] = useState();
  const filteredData = ccyCurrencyOption.filter(ccy => ccy === userId);

  useEffect(() => {
    HomePageApi.fetchCurrencyWithPrivat().then(data => {
      const ccyData = [...Object.values(data.map(item => item.ccy))];
      const ccyBaseData = [...Object.values(data.map(item => item.base_ccy))];
      const neededRes = data.filter(item => item.ccy === userId);
      const buyExchange = neededRes.map(item => Number(item.buy));
      const saleExchange = neededRes.map(item => Number(item.sale));

      setCurrencyOption(data);
      setCcyCurrencyOption(ccyData);
      setCcyBaseCurrencyOption(ccyBaseData);
      setExchange(saleExchange * amount);
      setBuyExchange(amountBuy / buyExchange);
    });
  }, [amount, amountBuy, userId]);
  console.log('storageSale', storageSale);

  useEffect(() => {
    window.localStorage.setItem('amountBuy', JSON.stringify(storageBuy));
    window.localStorage.setItem('amountSale', JSON.stringify(storageSale));
  }, [storageBuy, storageSale]);

  // Даем данные в инпут
  const onChangeSaleCurrency = e => {
    return setAmount(e.target.value);
  };
  const onChangeBuyCurrency = e => {
    return setBuyAmount(e.target.value);
  };

  // записываем данные в сторедж по нажатию кнопки Save
  const pushSaleToHistoryPage = data => {
    return setStorageSale(data);
  };
  const pushBuyToHistoryPage = data => {
    return setStorageBuy(data);
  };
  const uan = ccyBaseCurrencyOption[0];
  const id = uuidv4();
  console.log(id);

  return (
    <>
      <BackButton />
      <BtnHistory />
      <h2>Sale</h2>
      <div>
        Change{' '}
        <input
          type="number"
          onChange={onChangeSaleCurrency}
          defaultValue={amount}
        />{' '}
        {filteredData} to
        <input
          type="number"
          onChange={onChangeSaleCurrency}
          defaultValue={exchange}
        />
        {uan}
        <button
          onClick={() => {
            return pushSaleToHistoryPage({ exchange, amount, userId, id, uan });
          }}
        >
          Save
        </button>
      </div>
      <h2>Buy</h2>
      <div>
        Change{' '}
        <input
          type="number"
          onChange={onChangeBuyCurrency}
          defaultValue={amountBuy}
        />
        {uan} to
        <input
          type="number"
          onChange={onChangeBuyCurrency}
          defaultValue={exchangeBuy}
        />
        {filteredData}
        <button
          onClick={() => {
            return pushBuyToHistoryPage({
              exchangeBuy,
              amountBuy,
              uan,
              userId,
              id,
            });
          }}
        >
          Save
        </button>{' '}
      </div>
    </>
  );
}
