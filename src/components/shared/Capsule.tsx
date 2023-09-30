import { HStack, Icon, Text, VStack } from "@gluestack-ui/themed"
import { ChevronsUpDown, Percent } from "lucide-react-native"

export type CapsuleProps = {

}

export default function Capsule() {
  return (
    <VStack>
      <HStack
        space="sm"
        borderColor="$coolGray200"
        borderWidth="$1"
        paddingHorizontal="$2"
        paddingVertical="$1"
        borderRadius="$full">
        <Icon as={Percent} w="$5" h="$5" />
        <Text color="$black" size="sm" bold>Perubahan 24 Jam</Text>
        <Icon as={ChevronsUpDown} w="$5" h="$5" />
      </HStack>
    </VStack>
  )
}