import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import { type DepthDataEntity, DepthSocketDataSchema } from '../../order-book/entities/orderBookEntities';
import { mapDepthSocketDataToEntity } from '../../order-book/mapper/orderBookMapper';

export interface UseOrderBookProps {
  currency: string;
  symbol: string;
  isEnabled?: boolean;
  onConnectionOpen?: () => void;
  onConnectionError?: (event: Event) => void;
  onConnectionClose?: (event: CloseEvent) => void;
}

export default function useOrderBook({
  currency, symbol, onConnectionOpen, onConnectionError, onConnectionClose, isEnabled = false,
}: UseOrderBookProps) {
  const [depthSocket, setDepthSocket] = useState<DepthDataEntity>();

  useEffect(() => {
    if (isEnabled) {
      const webSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}${currency}@depth@1000ms`);

      if (onConnectionOpen !== undefined) {
        webSocket.onopen = onConnectionOpen;
      }

      webSocket.onmessage = throttle((e) => {
        const depthSocketDataValidate = DepthSocketDataSchema.validate(JSON.parse(e.data));
        if (depthSocketDataValidate.success) {
          const depthEntity = mapDepthSocketDataToEntity(depthSocketDataValidate.value);

          setDepthSocket((prev) => ({
            bids: depthEntity.bids.length > 0 ? depthEntity.bids : prev?.bids ?? [],
            asks: depthEntity.asks.length > 0 ? depthEntity.asks : prev?.asks ?? [],
          }));
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

  return { depthSocket };
}
