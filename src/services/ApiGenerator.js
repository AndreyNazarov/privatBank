import axios from 'axios';

const basicURL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
axios.defaults.baseURL = basicURL;

export async function fetchCurrencyWithPrivat() {
  try {
    const { data } = await axios.get();
    return data;
  } catch (err) {
    return err.message;
  }
}
