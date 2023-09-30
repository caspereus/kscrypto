import { ChartOhlcEntity } from "../entities/chartEntities";
import { ChartOhlcModel } from "../model/chartModel";

export const mapChartOhlcModelToEntity = (chartOhlcModel: ChartOhlcModel): ChartOhlcEntity => {
  return {
    timestamp: chartOhlcModel[0] ?? 0,
    open: chartOhlcModel[1] ?? 0,
    high: chartOhlcModel[2] ?? 0,
    low: chartOhlcModel[3] ?? 0,
    close: chartOhlcModel[4] ?? 0
  }
}