import React, { useMemo } from 'react';
import { VStack, Text } from '@gluestack-ui/themed';
import { ActivityIndicator } from 'react-native';
import CoinList from '../components/home/CoinList';
import ArticleList from '../components/home/ArcticleList';
import Header from '../components/home/Header';
import { useGetCoinsQuery } from '../module/coins/hooks/useGetCoinsQuery';
import { type CoinEntity } from '../module/coins/entities/coinEntities';
import { AppConfig } from '../lib/config';
import { AxiosError } from 'axios';
import ErrorModal from '../components/shared/ErrorModal';

export default function HomeScreen() {
  const getCoinQuery = useGetCoinsQuery({ currency: AppConfig.currency });

  const coins = useMemo((): CoinEntity[] => getCoinQuery.data?.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.current_price,
    symbol: item.symbol,
    icon: item.image,
    percentage: item.price_change_percentage_24h,
  })) ?? [], [getCoinQuery.data]);

  const renderFooterComponent = () => (
    <VStack>
      <Text
        size="lg"
        color="$black"
        padding="$4"
        bold
      >
        Artikel Terkini
      </Text>
      <ArticleList data={[
        {
          data: {
            thumbnail: 'https://pintu.co.id/_next/image?url=https%3A%2F%2Fpintu-academy.pintukripto.com%2Fwp-content%2Fuploads%2F2023%2F09%2FCara-Menggunakan-Limit-Order-Supaya-Untung-bedain-buat-investasi-dan-trading-short-term-768x576.png&w=3840&q=75',
            title: 'Cara Menggunakan Limit Order',
          },
        },
        {
          data: {
            thumbnail: 'https://pintu.co.id/_next/image?url=https%3A%2F%2Fpintu-academy.pintukripto.com%2Fwp-content%2Fuploads%2F2023%2F09%2FPFP-Kategori-NFT-Paling-Populer-768x576.png&w=3840&q=75',
            title: 'PFP: Kategori NFT Paling Populer',
          },
        },
        {
          data: {
            thumbnail: 'https://pintu.co.id/_next/image?url=https%3A%2F%2Fpintu-academy.pintukripto.com%2Fwp-content%2Fuploads%2F2023%2F09%2FFriend-Tech-768x576.png&w=3840&q=75',
            title: 'Apa itu Friend.Tech? Aplikasi Web3 yang Sedang Populer',
          },
        },
      ]}
      />
    </VStack>
  );

  return (
    <>
      <VStack flex={1} backgroundColor="$white">
        <VStack>
          <Header />
        </VStack>
        {getCoinQuery.isLoading || getCoinQuery.isError ? (
          <VStack flex={1} justifyContent="center" alignItems="center">
            <ActivityIndicator />
          </VStack>
        ) : (
          <CoinList
            data={coins}
            ListFooterComponent={renderFooterComponent}
          />
        )}
      </VStack>
      <ErrorModal
        isOpen={getCoinQuery.isError}
        onPressRefresh={() => getCoinQuery.refetch()}
      />
    </>
  );
}
