import { DetailCoinScreenProps } from '../screens/DetailCoinScreen';

export type RootStackParams = {
  Home: undefined;
  DetailCoin: {
    id: string;
    name: string;
    symbol: string;
  }
};