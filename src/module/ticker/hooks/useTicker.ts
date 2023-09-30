import { useEffect, useState } from "react";
import { SocketTickerDataSchema, TickerDataEntity } from "../entities/tickerEntities";
import { mapSocketTickerToEntity } from "../mapper/tickerMapper";
import throttle from 'lodash/throttle';

export type UseTickerProps = {
  currency: string;
  symbol: string;
  isEnabled?: boolean;
  onConnectionOpen?: () => void;
  onConnectionError?: (event: Event) => void;
  onConnectionClose?: (event: CloseEvent) => void;
}


export default function useTicker({ currency, symbol, onConnectionOpen, onConnectionError, onConnectionClose, isEnabled = false }: UseTickerProps) {
  const [socketTicker, setSocketTicker] = useState<TickerDataEntity>()

  useEffect(() => {
    if (isEnabled) {
      const webSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}${currency}@ticker`);

      webSocket.onopen = () => console.log('Connection open: ', `${symbol.toLowerCase()}${currency}`)
      webSocket.onmessage = throttle((e) => {
        const socketTickerDataValidate = SocketTickerDataSchema.validate(JSON.parse(e.data));
        if (socketTickerDataValidate.success) {
          const ticker = mapSocketTickerToEntity(socketTickerDataValidate.value)
          setSocketTicker(ticker);
        } else {
          webSocket.close()
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

  return { socketTicker }
}