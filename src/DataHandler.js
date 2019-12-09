import axios from 'axios';
const baseId = 'appNOeUBDdM11mzyn';
const baseUrl = 'https://api.airtable.com';
axios.defaults.headers.common['Authorization'] = 'Bearer keyYw32GnZh8plosB';

export const getStockData = async () => {
  let res;
  try {
    res = await axios.get(`${baseUrl}/v0/${baseId}/june_stock_prices`);
  } catch (err) {
    console.log(err);
  }
  res = res.data.records.sort((a, b) => a.fields.date - b.fields.date);
  return res;
};
