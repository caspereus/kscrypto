import { Text, HStack, Icon } from '@gluestack-ui/themed';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react-native';

export interface PercentageBadgeProps {
  percentage: number
}

export default function PercentageBadge({ percentage }: PercentageBadgeProps) {
  const isNetral = percentage === 0;
  const isUp = percentage > 0;

  const resolveColor = () => {
    if (isNetral) return '$coolGray600';
    if (percentage > 0) return '$green600';
    return '$red600';
  };

  const resolveIcon = () => {
    if (isNetral) return undefined;
    if (isUp) return ArrowUpRight;
    return ArrowDownRight;
  };

  return (
    <HStack alignItems="flex-end">
      <Icon as={resolveIcon()} h="$2" w="$2" color={resolveColor()} />
      <Text color={resolveColor()} bold>
        {percentage.toFixed(2)}
        {' '}
        %
      </Text>
    </HStack>
  );
}
