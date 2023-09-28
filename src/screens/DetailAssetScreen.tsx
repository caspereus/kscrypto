import { Button, ButtonText, HStack, ScrollView, VStack, Text } from "@gluestack-ui/themed";
import NavigationBar from "../components/shared/NavigationBar";
import { formatMoney } from "../lib/util";


export default function DetailAssetScreen() {
  return (
    <VStack flex={1}>
      <NavigationBar title="Bitcoin" />
      <ScrollView flex={1}>

      </ScrollView>
      <HStack backgroundColor="$white" p="$4" space="md">
        <VStack space="sm" flex={1}>
          <Text
            bold
            size="xs"
            color="$black"
            textAlign="center">Rp {formatMoney(400000000)}
          </Text>
          <Button
            size="md"
            variant="solid"
            action="primary"
          >
            <ButtonText>Beli</ButtonText>
          </Button>
        </VStack>
        <VStack space="sm" flex={1}>
          <Text
            bold
            size="xs"
            color="$black"
            textAlign="center">Rp {formatMoney(400000000)}
          </Text>
          <Button
            size="md"
            variant="solid"
            action="negative"
          >
            <ButtonText>Jual</ButtonText>
          </Button>
        </VStack>
      </HStack>
    </VStack>
  )
}