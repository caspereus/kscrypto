import * as rt from 'runtypes';

export const SocketTickerDataSchema = rt.Record({
  e: rt.String,
  E: rt.Number,
  s: rt.String,
  p: rt.String,
  P: rt.String,
  w: rt.String,
  x: rt.String,
  c: rt.String,
  Q: rt.String,
  b: rt.String,
  B: rt.String,
  a: rt.String,
  A: rt.String,
  o: rt.String,
  h: rt.String,
  l: rt.String,
  v: rt.String,
  q: rt.String,
  O: rt.Number,
  C: rt.Number,
  F: rt.Number,
  L: rt.Number,
  n: rt.Number,
});

export type SocketTickerDataEntity = rt.Static<typeof SocketTickerDataSchema>;

export const TickerDataSchema = rt.Record({
  eventType: rt.String,
  eventTime: rt.Number,
  symbol: rt.String,
  priceChange: rt.String,
  priceChangePercent: rt.String,
  weightedAvg: rt.String,
  prevDayClose: rt.String,
  curDayClose: rt.String,
  closeTradeQuantity: rt.String,
  bestBid: rt.String,
  bestBidQnt: rt.String,
  bestAsk: rt.String,
  bestAskQnt: rt.String,
  open: rt.String,
  high: rt.String,
  low: rt.String,
  volume: rt.String,
  volumeQuote: rt.String,
  openTime: rt.Number,
  closeTime: rt.Number,
  firstTradeId: rt.Number,
  lastTradeId: rt.Number,
  totalTrades: rt.Number,
});

export type TickerDataEntity = rt.Static<typeof TickerDataSchema>;
