import { useQuery } from "react-query";
import { getCoinList } from "../services/coinService";
import { AppConfig } from "../../../lib/config";

export type UseGetCoinsQueryProps = {
  ids?: string;
  currency?: string;
}

export const useGetCoinsQuery = ({ ids, currency = AppConfig.currency }: UseGetCoinsQueryProps) => {
  return useQuery({
    queryKey: ['get-coins', ids, currency],
    queryFn: () => getCoinList({ currency, ids })
  });
};