import { VStack, Text, HStack } from '@gluestack-ui/themed';
import { FlashList } from '@shopify/flash-list';
import { memo, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import useOrderBook from '../../module/ticker/hooks/useOrderBook';
import { AppConfig } from '../../lib/config';
import { type DepthItemEntity } from '../../module/order-book/entities/orderBookEntities';

export type OrderBookProps = {
  symbol: string
}

function OrderBook({ symbol }: OrderBookProps) {
  const { depthSocket } = useOrderBook({
    currency: AppConfig.currencyAlias,
    symbol,
    isEnabled: true,
  });

  const renderAskItem = useCallback(({ item }: { item: DepthItemEntity }) => (
    <HStack justifyContent="space-between" p="$1">
      <Text size="xs" color="$red600" bold>{item.priceLevel}</Text>
      <Text size="xs" color="$black">{item.quantity}</Text>
    </HStack>
  ), []);

  const renderBidItem = useCallback(({ item }: { item: DepthItemEntity }) => (
    <HStack justifyContent="space-between" p="$1">
      <Text size="xs" color="$black">{item.quantity}</Text>
      <Text size="xs" color="$green600" bold>{item.priceLevel}</Text>
    </HStack>
  ), []);

  const bids = depthSocket?.bids.splice(0, 10);
  const asks = depthSocket?.bids.splice(0, 10);

  const renderEmptyState = () => <ActivityIndicator />;

  return (
    <VStack padding="$4" backgroundColor="$white" space="sm">
      <Text color="$black" size="md" bold>Order Book</Text>
      <HStack space="sm">
        <VStack flex={1} space="sm">
          <Text color="$black" size="sm" bold>Beli</Text>
          <VStack space="sm" backgroundColor="$green50" borderRadius="$sm">
            <FlashList
              data={bids}
              renderItem={renderBidItem}
              keyExtractor={(item) => item.priceLevel.toString()}
              nestedScrollEnabled
              estimatedItemSize={10}
              ListEmptyComponent={renderEmptyState()}
            />
          </VStack>
        </VStack>
        <VStack flex={1} space="sm">
          <Text color="$black" size="sm" bold>Jual</Text>
          <VStack backgroundColor="$red50" space="sm" borderRadius="$sm">
            <FlashList
              data={asks}
              renderItem={renderAskItem}
              keyExtractor={(item) => item.priceLevel.toString()}
              nestedScrollEnabled
              estimatedItemSize={10}
              ListEmptyComponent={renderEmptyState()}
            />
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default memo(OrderBook);
