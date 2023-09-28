import { HStack, Pressable, VStack } from "@gluestack-ui/themed"
import { FlashList } from "@shopify/flash-list"
import { useCallback } from "react"
import ArticleItem, { ArticleItemProps } from "./ArticleItem"

export type ArticleListProps = {
  data: ArticleItemProps[]
}

export default function ArticleList({ data }: ArticleListProps) {
  const renderItem = useCallback(({ item }: { item: ArticleItemProps }) => {
    return (
      <Pressable>
        <ArticleItem {...item} />
      </Pressable>
    )
  }, [data])

  const renderSeparator = () => {
    return <VStack width="$2" />
  }

  return (
    <HStack flex={1}>
      <FlashList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        estimatedItemSize={10}
        ListHeaderComponent={renderSeparator}
        ItemSeparatorComponent={renderSeparator}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.data}.${index}`}
      />
    </HStack>
  )
}