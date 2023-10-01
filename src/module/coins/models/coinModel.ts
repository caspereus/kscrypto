import * as rt from 'runtypes';

export const CurrencyModelSchema = rt.Union(
  rt.Literal('btc'),
  rt.Literal('usd'),
  rt.Literal('eth'),
);

export type CurrencyModel = rt.Static<typeof CurrencyModelSchema>;

export const RoiModelSchema = rt.Record({
  times: rt.Number,
  currency: CurrencyModelSchema,
  percentage: rt.Number,
});

export type RoiModel = rt.Static<typeof RoiModelSchema>;

export const CoinModelSchema = rt.Record({
  id: rt.String,
  symbol: rt.String,
  name: rt.String,
  image: rt.String,
  current_price: rt.Number,
  market_cap: rt.Number,
  market_cap_rank: rt.Number,
  fully_diluted_valuation: rt.Null.Or(rt.Number),
  total_volume: rt.Number,
  high_24h: rt.Number,
  low_24h: rt.Number,
  price_change_24h: rt.Number,
  price_change_percentage_24h: rt.Number,
  market_cap_change_24h: rt.Number,
  market_cap_change_percentage_24h: rt.Number,
  circulating_supply: rt.Number,
  total_supply: rt.Null.Or(rt.Number),
  max_supply: rt.Null.Or(rt.Number),
  ath: rt.Number,
  ath_change_percentage: rt.Number,
  ath_date: rt.String,
  atl: rt.Number,
  atl_change_percentage: rt.Number,
  atl_date: rt.String,
  roi: rt.Null.Or(RoiModelSchema),
  last_updated: rt.String,
});

export type CoinModel = rt.Static<typeof CoinModelSchema>;

export const CoinListModelSchema = rt.Array(CoinModelSchema);

export type CoinListModel = rt.Static<typeof CoinListModelSchema>;
