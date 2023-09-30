import * as rt from 'runtypes'

export const ChartOhlcListSchema = rt.Array(rt.Number)

export const ChartOhlcListModelSchema = rt.Array(ChartOhlcListSchema)

export type ChartOhlcModel = rt.Static<typeof ChartOhlcListSchema>

export type ChartOhlcListModel = rt.Static<typeof ChartOhlcListModelSchema>