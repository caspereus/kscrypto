import { Text, HStack } from '@gluestack-ui/themed';
import { suffixedNumber } from '../../lib/util';

export type MarketStatItemProps = React.ComponentProps<typeof HStack> & {
  name: string;
  value: number;
};

export default function MartketStatItem({ name, value, ...restProps }: MarketStatItemProps) {
  return (
    <HStack
      {...restProps}
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="$white"
    >
      <Text color="$black" size="sm">{name}</Text>
      <Text color="$black" size="sm">{suffixedNumber(value)}</Text>
    </HStack>
  );
}
