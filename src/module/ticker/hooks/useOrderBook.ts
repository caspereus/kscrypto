import { useEffect, useState } from "react";
import { DepthDataEntity, DepthSocketDataSchema } from "../../../module/order-book/entities/orderBookEntities";
import { mapDepthSocketDataToEntity } from "../../../module/order-book/mapper/orderBookMapper";
import throttle from 'lodash/throttle';




export type UseOrderBookProps = {
  currency: string;
  symbol: string;
  isEnabled?: boolean;
  onConnectionOpen?: () => void;
  onConnectionError?: (event: Event) => void;
  onConnectionClose?: (event: CloseEvent) => void;
}


export default function useOrderBook({ currency, symbol, onConnectionOpen, onConnectionError, onConnectionClose, isEnabled = false }: UseOrderBookProps) {
  const [depthSocket, setDepthSocket] = useState<DepthDataEntity>()

  useEffect(() => {
    if (isEnabled) {
      const webSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}${currency}@depth@1000ms`);

      webSocket.onopen = () => console.log('Connection open: ', `${symbol.toLowerCase()}${currency}`)

      webSocket.onmessage = throttle((e) => {
        const depthSocketDataValidate = DepthSocketDataSchema.validate(JSON.parse(e.data));
        if (depthSocketDataValidate.success) {
          const depthEntity = mapDepthSocketDataToEntity(depthSocketDataValidate.value)

          // const bids =  : []
          setDepthSocket((prev) => ({
            bids: depthEntity.bids.length > 0 ? depthEntity.bids : prev?.bids ?? [],
            asks: depthEntity.asks.length > 0 ? depthEntity.asks : prev?.asks ?? []
          }));
        } else {
          webSocket.close();
        }
      }, 5000);

      if (onConnectionError) {
        webSocket.onerror = onConnectionError
      }

      if (onConnectionClose) {
        webSocket.onclose = onConnectionClose
      }

      return () => {
        webSocket.close()
      }
    }
  }, [isEnabled, currency, symbol])

  return { depthSocket }
}