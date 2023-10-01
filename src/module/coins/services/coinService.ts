import axios from 'axios';
import { type CoinListModel, CoinListModelSchema } from '../models/coinModel';

interface GetCoinListParam {
  currency: string;
  ids?: string;
}

export async function getCoinList({ currency, ids }: GetCoinListParam): Promise<CoinListModel> {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        page: 1,
        per_page: 10,
        vs_currency: currency,
        ids,
      },
    });

    const validationResult = CoinListModelSchema.validate(response.data);
    if (validationResult.success) {
      return validationResult.value;
    }

    throw new Error('Decode Error');
  } catch (e) {
    throw e;
  }
}
