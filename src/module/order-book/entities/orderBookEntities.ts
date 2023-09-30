import * as rt from 'runtypes'

export const DepthSocketDataSchema = rt.Record({
  b: rt.Array(rt.Array(rt.String)),
  a: rt.Array(rt.Array(rt.String))
})

export type DepthSocketDataEntity = rt.Static<typeof DepthSocketDataSchema>

export const DepthItemSchema = rt.Record({
  priceLevel: rt.Number,
  quantity: rt.Number,
})

export const DepthDataSchema = rt.Record({
  bids: rt.Array(DepthItemSchema),
  asks: rt.Array(DepthItemSchema)
})

export type DepthDataEntity = rt.Static<typeof DepthDataSchema>
export type DepthItemEntity = rt.Static<typeof DepthItemSchema>

