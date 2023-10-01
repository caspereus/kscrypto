import { CoinEntity } from "../entities/coinEntities";
import { CoinModel } from "../models/coinModel";


export const mapCoinToEntity = (coinModel: CoinModel): CoinEntity => ({
  id: coinModel.id,
  name: coinModel.name,
  price: coinModel.current_price,
  symbol: coinModel.symbol,
  icon: coinModel.image,
  percentage: coinModel.price_change_percentage_24h,
});
