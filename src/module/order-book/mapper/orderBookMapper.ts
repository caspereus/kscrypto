import { type DepthSocketDataEntity, type DepthDataEntity } from '../entities/orderBookEntities';

export const mapDepthSocketDataToEntity = (depthSocketData: DepthSocketDataEntity): DepthDataEntity => ({
  bids: depthSocketData.b.map((bid) => ({
    priceLevel: Number(bid?.[0] ?? 0),
    quantity: Number(bid?.[1] ?? 0),
  })),
  asks: depthSocketData.a.map((ask) => ({
    priceLevel: Number(ask?.[0] ?? 0),
    quantity: Number(ask?.[1] ?? 0),
  })),
});
