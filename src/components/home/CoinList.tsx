import { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, type FlatListProps, TouchableOpacity } from 'react-native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParams } from '../../lib/type';
import { type CoinEntity } from '../../module/coins/entities/coinEntities';
import Separator from '../shared/Separator';
import CoinItem, { type CoinItemProps } from './CoinItem';
import useTicker from '../../module/ticker/hooks/useTicker';
import { AppConfig } from '../../lib/config';

export type CoinListProps = Omit<FlatListProps<CoinEntity>, 'renderItem'> & {
  data: CoinEntity[]
};

type LiveCoinItemProps = CoinItemProps;

const LiveCoinItem = memo(({ data }: LiveCoinItemProps) => {
  const { socketTicker } = useTicker({
    currency: AppConfig.currencyAlias,
    symbol: data.symbol,
    isEnabled: true,
  });

  const pricePercentage = socketTicker?.priceChangePercent !== undefined ? Number(socketTicker?.priceChangePercent ?? 0) : data?.percentage ?? 0;
  const openPrice = socketTicker?.open !== undefined ? Number(socketTicker?.open ?? 0) : data?.price ?? 0;

  return (
    <CoinItem data={{
      ...data,
      price: openPrice,
      percentage: pricePercentage,
    }}
    />
  );
});

export default function CoinList({ data, ...restProps }: CoinListProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const renderItem = useCallback(({ item }: { item: CoinEntity }) => {
    const navigateToDetailAsset = ({ id, symbol, name }: CoinEntity) => {
      navigation.navigate('DetailCoin', { id, symbol, name });
    };

    return (
      <TouchableOpacity onPress={() => { navigateToDetailAsset(item); }}>
        <LiveCoinItem data={item} />
      </TouchableOpacity>
    );
  }, [navigation]);

  const renderSeparator = () => <Separator />;

  return (
    <FlatList
      {...restProps}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={(item, index) => `${item.symbol}.${index}`}
    />
  );
}
