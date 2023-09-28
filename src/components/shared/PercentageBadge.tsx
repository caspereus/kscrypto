import { VStack, Text } from "@gluestack-ui/themed"

export type PercentageBadge = {
  percentage: number
}

export default function PercentageBadge({ percentage }: PercentageBadge) {

  const resolveBackgroundColor = () => {
    if (percentage === 0) return "$coolGray600";
    if (percentage > 0) return "$green600";
    return "$red600"
  }

  return (
    <VStack>
      <Text color={resolveBackgroundColor()} bold>{percentage}%</Text>
    </VStack>
  )
}