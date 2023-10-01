import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import { SocketTickerDataSchema, type TickerDataEntity } from '../entities/tickerEntities';
import { mapSocketTickerToEntity } from '../mapper/tickerMapper';

export interface UseTickerProps {
  currency: string;
  symbol: string;
  isEnabled?: boolean;
  onConnectionOpen?: () => void;
  onConnectionError?: (event: Event) => void;
  onConnectionClose?: (event: CloseEvent) => void;
}

export default function useTicker({
  currency, symbol, onConnectionOpen, onConnectionError, onConnectionClose, isEnabled = false,
}: UseTickerProps) {
  const [socketTicker, setSocketTicker] = useState<TickerDataEntity>();

  useEffect(() => {
    if (isEnabled) {
      const webSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}${currency}@ticker`);

      if (onConnectionOpen !== undefined) {
        webSocket.onopen = onConnectionOpen;
      }

      webSocket.onmessage = throttle((e) => {
        const socketTickerDataValidate = SocketTickerDataSchema.validate(JSON.parse(e.data));
        if (socketTickerDataValidate.success) {
          const ticker = mapSocketTickerToEntity(socketTickerDataValidate.value);
          setSocketTicker(ticker);
        } else {
          webSocket.close();
        }
      }, 5000);

      if (onConnectionError !== undefined) {
        webSocket.onerror = onConnectionError;
      }

      if (onConnectionClose !== undefined) {
        webSocket.onclose = onConnectionClose;
      }

      return () => {
        webSocket.close();
      };
    }

    return () => { };
  }, [isEnabled, currency, symbol, onConnectionOpen, onConnectionClose, onConnectionError]);

  return { socketTicker };
}
