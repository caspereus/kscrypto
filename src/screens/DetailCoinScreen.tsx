import {
  Button, ButtonText, HStack, ScrollView, VStack, Text, Image,
} from '@gluestack-ui/themed';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { CandlestickChart } from 'react-native-wagmi-charts';
import { useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { formatMoney } from '../lib/util';
import type { RootStackParams } from '../lib/type';
import { useGetCoinsQuery } from '../module/coins/hooks/useGetCoinsQuery';
import { AppConfig } from '../lib/config';
import { useGetChartQuery } from '../module/chart/hooks/useGetCandleQuery';
import { mapChartOhlcModelToEntity } from '../module/chart/mapper/chartMapper';
import NavigationBar from '../components/shared/NavigationBar';
import MartketStatItem from '../components/detail/MartketStatItem';
import PercentageBadge from '../components/shared/PercentageBadge';
import useTicker from '../module/ticker/hooks/useTicker';
import Separator from '../components/shared/Separator';
import OrderBook from '../components/detail/OrderBookList';

export type DetailCoinScreenProps = NativeStackScreenProps<
RootStackParams,
'DetailCoin'
>;

export default function DetailCoinScreen({ route }: DetailCoinScreenProps) {
  const { name, id, symbol } = route.params;

  const getCoinQuery = useGetCoinsQuery({
    currency: AppConfig.currency,
    ids: id,
  });

  const getChartQuery = useGetChartQuery({
    currency: AppConfig.currency,
    id,
    days: 1,
  });

  const { socketTicker } = useTicker({
    currency: AppConfig.currencyAlias,
    symbol,
    isEnabled: getCoinQuery.isFetched,
  });

  const coin = getCoinQuery?.data?.[0];

  const charts = useMemo(() => getChartQuery.data?.map(mapChartOhlcModelToEntity) ?? [], [getChartQuery.data]);

  const pricePercentage = socketTicker?.priceChangePercent !== undefined ? Number(socketTicker?.priceChangePercent ?? 0) : coin?.price_change_percentage_24h ?? 0;
  const openPrice = socketTicker?.open !== undefined ? Number(socketTicker?.open ?? 0) : coin?.current_price ?? 0;

  return (
    <VStack flex={1} backgroundColor="$white">
      <NavigationBar title={name} />
      <VStack flex={1}>
        {getCoinQuery.isLoading ? (
          <VStack padding="$4">
            <ActivityIndicator />
          </VStack>
        ) : (
          <ScrollView flex={1}>
            <HStack padding="$4" space="sm" alignItems="center">
              <Image source={{ uri: coin?.image }} size="xs" alt={coin?.name} />
              <VStack>
                <Text color="$coolGray600" size="sm">
                  Harga
                  {name}
                </Text>
                <HStack alignItems="center" space="sm">
                  <Text color="$black" size="xl" bold>{formatMoney(openPrice)}</Text>
                  <PercentageBadge percentage={pricePercentage} />
                </HStack>
              </VStack>
            </HStack>
            <Separator />
            <VStack backgroundColor="$white" paddingVertical="$4">
              {getChartQuery.isLoading ? <ActivityIndicator /> : (
                <CandlestickChart.Provider data={charts}>
                  <CandlestickChart>
                    <CandlestickChart.Candles />
                  </CandlestickChart>
                </CandlestickChart.Provider>
              )}
            </VStack>
            <Separator />
            <VStack padding="$4" backgroundColor="$white" space="sm">
              <Text color="$black" size="md" bold>Market Stats</Text>
              <VStack space="sm">
                <MartketStatItem
                  name="Market Capitalization"
                  value={coin?.market_cap ?? 0}
                />
                <MartketStatItem
                  name="Full Diluted Valuation"
                  value={coin?.fully_diluted_valuation ?? 0}
                />
                <MartketStatItem
                  name="Circulating Supply"
                  value={coin?.circulating_supply ?? 0}
                />
                <MartketStatItem
                  name="Maximum Supply"
                  value={coin?.max_supply ?? 0}
                />
                <MartketStatItem
                  name="Total Volume"
                  value={coin?.total_volume ?? 0}
                />
              </VStack>
            </VStack>
            <Separator />
            <OrderBook symbol={symbol} />
          </ScrollView>
        )}
      </VStack>
      {coin !== undefined ? (
        <VStack>
          <Separator />
          <HStack backgroundColor="$white" p="$4" space="md">
            <VStack space="sm" flex={1}>
              <Text
                bold
                size="xs"
                color="$black"
                textAlign="center"
              >
                {formatMoney(Number(socketTicker?.bestAsk ?? 0))}
              </Text>
              <Button
                size="md"
                variant="solid"
                action="primary"
              >
                <ButtonText disabled={socketTicker === undefined}>Beli</ButtonText>
              </Button>
            </VStack>
            <VStack space="sm" flex={1}>
              <Text
                bold
                size="xs"
                color="$black"
                textAlign="center"
              >
                {formatMoney(Number(socketTicker?.bestBid ?? 0))}
              </Text>
              <Button
                size="md"
                variant="solid"
                action="negative"
              >
                <ButtonText disabled={socketTicker === undefined}>Jual</ButtonText>
              </Button>
            </VStack>
          </HStack>
        </VStack>
      ) : null}
    </VStack>
  );
}
