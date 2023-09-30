import type { ComponentProps } from "react";
import { HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import { formatMoney } from "../../lib/util";
import PercentageBadge from "../shared/PercentageBadge";
import { CoinEntity } from '../../module/coins/entities/coinEntities';

export type CoinItemProps = ComponentProps<typeof HStack> & {
  data: CoinEntity
}

export default function CoinItem({ data, ...restProps }: CoinItemProps) {
  return (
    <HStack
      {...restProps}
      paddingHorizontal="$4"
      paddingVertical="$2"
      backgroundColor="$white"
      justifyContent="space-between">
      <HStack alignItems="center" space="lg">
        <Image source={{ uri: data.icon }} size="xs" alt={data.name} />
        <VStack>
          <Text color="$black" size="md" bold>
            {data.name}
          </Text>
          <Text color="$coolGray400" size="sm">
            {data.symbol.toUpperCase()}
          </Text>
        </VStack>
      </HStack>
      <VStack alignItems="flex-end">
        <Text color="$black" size="md" bold>
          {formatMoney(data.price)}
        </Text>
        <PercentageBadge percentage={data.percentage} />
      </VStack>
    </HStack>
  )
}