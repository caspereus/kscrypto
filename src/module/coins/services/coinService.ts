
import axios from 'axios';
import { CoinListModel, CoinListModelSchema } from '../models/coinModel';

type GetCoinListParam = {
  currency: string;
  ids?: string;
}

export async function getCoinList({ currency, ids }: GetCoinListParam): Promise<CoinListModel> {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        'vs_currency': currency,
        'ids': ids,
      }
    })

    const validationResult = CoinListModelSchema.validate(response.data);
    if (validationResult.success) {
      return validationResult.value;
    }

    throw new Error('Decode Error')
  } catch (e) {
    throw e;
  }
}