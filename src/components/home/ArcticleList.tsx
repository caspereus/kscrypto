import { HStack, Pressable, VStack } from '@gluestack-ui/themed';
import { FlashList } from '@shopify/flash-list';
import { useCallback } from 'react';
import ArticleItem, { type ArticleItemProps } from './ArticleItem';

export type ArticleListProps = {
  data: ArticleItemProps[]
}

export default function ArticleList({ data }: ArticleListProps) {
  const renderItem = useCallback(({ item }: { item: ArticleItemProps }) => (
    <Pressable>
      <ArticleItem {...item} />
    </Pressable>
  ), []);

  const renderSeparator = () => <VStack width="$2" />;

  return (
    <HStack flex={1}>
      <FlashList
        data={data}
        horizontal
        renderItem={renderItem}
        estimatedItemSize={10}
        ListHeaderComponent={renderSeparator}
        ItemSeparatorComponent={renderSeparator}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.data}.${index}`}
      />
    </HStack>
  );
}
