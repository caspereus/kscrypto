import { useQuery } from 'react-query';
import { AppConfig } from '../../../lib/config';
import { getChartOhlc } from '../services/chartServices';

export interface UseGetChartQueryProps {
  id: string;
  currency?: string;
  days?: number;
}

export const useGetChartQuery = ({ id, currency = AppConfig.currency, days = 1 }: UseGetChartQueryProps) => useQuery({
  queryKey: ['get-chart', id, currency, days],
  queryFn: async () => getChartOhlc({ id, currency, days }),
});
