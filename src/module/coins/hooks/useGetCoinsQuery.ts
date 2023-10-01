import { useQuery } from 'react-query';
import { getCoinList } from '../services/coinService';
import { AppConfig } from '../../../lib/config';

export interface UseGetCoinsQueryProps {
  ids?: string;
  currency?: string;
}

export const useGetCoinsQuery = ({ ids, currency = AppConfig.currency }: UseGetCoinsQueryProps) => useQuery({
  queryKey: ['get-coins', ids, currency],
  queryFn: async () => getCoinList({ currency, ids }),
});
