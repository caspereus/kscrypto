import { DetailCoinScreenProps } from '../screens/DetailCoinScreen';

export interface RootStackParams {
  Home: undefined;
  DetailCoin: {
    id: string;
    name: string;
    symbol: string;
  }
}
