import { VStack, Image, Text } from '@gluestack-ui/themed';

export type ArticleItemProps = {
  data: {
    thumbnail: string;
    title: string;
  }
}

export default function ArticleItem({ data }: ArticleItemProps) {
  return (
    <VStack
      space="sm"
      padding="$2"
      borderWidth="$1"
      borderColor="$coolGray200"
      width="$40"
      borderRadius="$sm"
    >
      <Image
        source={{ uri: data.thumbnail }}
        resizeMode="cover"
        height={120}
        alt={data.title}
      />
      <Text
        color="$black"
        size="sm"
        bold
        isTruncated={false}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {data.title}
      </Text>
    </VStack>
  );
}
