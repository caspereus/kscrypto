import type { ComponentProps } from "react";
import { HStack, Text, VStack } from "@gluestack-ui/themed";
import { formatMoney } from "../../lib/util";
import PercentageBadge from "../shared/PercentageBadge";

export type AssetItemProps = ComponentProps<typeof HStack> & {
  data: {
    name: string;
    symbol: string;
    price: number;
  }
}

export default function AssetItem({ data, ...restProps }: AssetItemProps) {
  return (
    <HStack
      {...restProps}
      padding="$4"
      backgroundColor="$white"
      justifyContent="space-between">
      <VStack>
        <Text color="$black" size="lg" bold>
          {data.name}
        </Text>
        <Text color="$coolGray400">
          {data.symbol.toUpperCase()}
        </Text>
      </VStack>
      <VStack alignItems="flex-end">
        <Text color="$black" size="lg" bold>
          Rp {formatMoney(data.price)}
        </Text>
        <PercentageBadge percentage={-5} />
      </VStack>
    </HStack>
  )
}