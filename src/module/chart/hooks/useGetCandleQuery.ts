import { useQuery } from "react-query";
import { AppConfig } from "../../../lib/config";
import { getChartOhlc } from "../services/chartServices";

export type UseGetChartQueryProps = {
  id: string;
  currency?: string;
  days?: number;
}

export const useGetChartQuery = ({ id, currency = AppConfig.currency, days = 1 }: UseGetChartQueryProps) => {
  return useQuery({
    queryKey: ['get-chart', id, currency, days],
    queryFn: () => getChartOhlc({ id, currency, days })
  });
};