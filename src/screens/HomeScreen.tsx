import { ScrollView, VStack, Text } from "@gluestack-ui/themed";
import AssetList from "../components/home/AssetList";
import ArticleList from "../components/home/ArcticleList";
import Header from "../components/home/Header";
import React from "react";
import { RefreshControl } from "react-native";

export default function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  return (
    <VStack flex={1} backgroundColor="$white">
      <Header />
      <ScrollView flex={1} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <AssetList data={[
          {
            data: {
              name: 'Bitcoin',
              symbol: 'BTC',
              price: 400000000
            }
          },
          {
            data: {
              name: 'Bitcoin',
              symbol: 'BTC',
              price: 400000000
            }
          },
          {
            data: {
              name: 'Bitcoin',
              symbol: 'BTC',
              price: 400000000
            }
          },
          {
            data: {
              name: 'Bitcoin',
              symbol: 'BTC',
              price: 400000000
            }
          },
          {
            data: {
              name: 'Bitcoin',
              symbol: 'BTC',
              price: 400000000
            }
          }
        ]} />
        <VStack>
          <Text
            size="lg"
            color="$black"
            padding="$4"
            bold>
            Artikel Terkini
          </Text>
          <ArticleList data={[
            {
              data: {
                thumbnail: "https://pintu.co.id/_next/image?url=https%3A%2F%2Fpintu-academy.pintukripto.com%2Fwp-content%2Fuploads%2F2023%2F09%2FCara-Menggunakan-Limit-Order-Supaya-Untung-bedain-buat-investasi-dan-trading-short-term-768x576.png&w=3840&q=75",
                title: "Cara Menggunakan Limit Order"
              }
            },
            {
              data: {
                thumbnail: "https://pintu.co.id/_next/image?url=https%3A%2F%2Fpintu-academy.pintukripto.com%2Fwp-content%2Fuploads%2F2023%2F09%2FPFP-Kategori-NFT-Paling-Populer-768x576.png&w=3840&q=75",
                title: "PFP: Kategori NFT Paling Populer"
              }
            },
            {
              data: {
                thumbnail: "https://pintu.co.id/_next/image?url=https%3A%2F%2Fpintu-academy.pintukripto.com%2Fwp-content%2Fuploads%2F2023%2F09%2FFriend-Tech-768x576.png&w=3840&q=75",
                title: "Apa itu Friend.Tech? Aplikasi Web3 yang Sedang Populer"
              }
            },
          ]} />
        </VStack>
      </ScrollView>
    </VStack>
  )
}