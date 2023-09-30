import axios from 'axios';
import { ChartOhlcListModel, ChartOhlcListModelSchema } from '../model/chartModel';

type GetChartOhlcParams = {
  id: string;
  currency: string;
  days: number;
}

export async function getChartOhlc({ id, currency, days }: GetChartOhlcParams): Promise<ChartOhlcListModel> {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/ohlc`, {
      params: {
        'vs_currency': currency,
        'days': days
      }
    })

    const validationResult = ChartOhlcListModelSchema.validate(response.data);
    if (validationResult.success) {
      return validationResult.value;
    }

    throw new Error('Decode Error')
  } catch (e) {
    throw e;
  }
}