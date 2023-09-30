import { useCallback } from "react"
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from "../../lib/type"
import { FlatList, FlatListProps, TouchableOpacity } from "react-native"
import { CoinEntity } from "../../module/coins/entities/coinEntities"
import Separator from "../shared/Separator"
import CoinItem from "./CoinItem"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type CoinListProps = Omit<FlatListProps<CoinEntity>, 'renderItem'> & {
  data: CoinEntity[]
}

export default function CoinList({ data, ...restProps }: CoinListProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()
  const navigateToDetailAsset = ({ id, symbol, name }: CoinEntity) => {
    navigation.navigate('DetailCoin', { id, symbol, name })
  }

  const renderItem = useCallback(({ item }: { item: CoinEntity }) => {
    return (
      <TouchableOpacity onPress={() => navigateToDetailAsset(item)}>
        <CoinItem data={item} />
      </TouchableOpacity>
    )
  }, [data])

  const renderSeparator = () => <Separator />

  return (
    <FlatList
      {...restProps}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={(item, index) => `${item.symbol}.${index}`}
    />
  )
}