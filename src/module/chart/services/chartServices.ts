import axios from 'axios';
import { type ChartOhlcListModel, ChartOhlcListModelSchema } from '../model/chartModel';

interface GetChartOhlcParams {
  id: string;
  currency: string;
  days: number;
}

export async function getChartOhlc({ id, currency, days }: GetChartOhlcParams): Promise<ChartOhlcListModel> {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/ohlc`, {
      params: {
        vs_currency: currency,
        days,
      },
    });

    const validationResult = ChartOhlcListModelSchema.validate(response.data);
    if (validationResult.success) {
      return validationResult.value;
    }

    throw new Error('Decode Error');
  } catch (e) {
    throw e;
  }
}