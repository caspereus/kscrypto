import { Pressable, VStack } from "@gluestack-ui/themed"
import AssetItem, { AssetItemProps } from "./AssetItem"
import { FlashList } from "@shopify/flash-list"
import { useCallback } from "react"
import Separator from "../shared/Separator"
import { useNavigation } from "@react-navigation/native"
import { RootStackParams } from "../../lib/type"
import { TouchableOpacity } from "react-native"

export type AssetListProps = {
  data: AssetItemProps[]
}

export default function AssetList({ data }: AssetListProps) {
  const navigation = useNavigation<RootStackParams>()
  const navigateToDetailAsset = () => {
    navigation.navigate('DetailAsset')
  }

  const renderItem = useCallback(({ item }: { item: AssetItemProps }) => {
    return (
      <TouchableOpacity onPress={navigateToDetailAsset}>
        <AssetItem {...item} />
      </TouchableOpacity>
    )
  }, [data])

  const renderSeparator = () => <Separator />

  return (
    <VStack flex={1}>
      <FlashList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={10}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item, index) => `${item.data.symbol}.${index}`}
      />
    </VStack>
  )
}