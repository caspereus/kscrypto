# KSCrypto App Documentation

Welcome to the documentation for the KSCrypto App, a powerful cryptocurrency application that provides access to real-time data, market information, and more. This document will help you navigate and understand the various aspects of the app.

## API & Web Socket Stream

### API
KSCrypto App leverages data from the [Coin Gecko API](https://www.coingecko.com/en/api/documentation) to provide comprehensive cryptocurrency market data. Here are the available endpoints:

- **Get Markets:** Retrieve market data for various cryptocurrencies. Endpoint: `coins/markets`.

- **Get Charts:** Access historical price charts for specific cryptocurrencies. Endpoint: `coins/${id}/ohlc`.

### Web Socket
The app also utilizes the [Binance Websocket API](https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams) to provide real-time updates. Here are the available streams:

- **Ticker:** Get real-time ticker updates for specific cryptocurrency pairs. Stream: `ws/exampeusdt@ticker`.

- **Depths:** Receive depth information for order books of specific cryptocurrency pairs. Stream: `ws/exampeusdt@depths`.

## Package & Libraries
The KSCrypto App is built with several packages and libraries to enhance its functionality and user experience:

- **Expo:** A platform for building cross-platform mobile apps.

- **Gluestack UI:** A Native Base alternative for building intuitive user interfaces.

- **Axios:** A popular JavaScript library for making HTTP requests.

- **React Query:** A library for managing, caching, and synchronizing server state in React applications.

- **Runtypes:** A library for runtime type checking in JavaScript/TypeScript.

- **Loadash Throttle:** A utility library for throttling functions.

- **React Navigation:** A library for navigation in React Native applications.

- **Lucide Icon:** A collection of high-quality SVG icons.

- **Shopify Flashlist:** A library or component used for flash notifications.

## Previews
Here are some previews of the KSCrypto App to give you a glimpse of its user interface:

| Home | Detail Coin | Order Book |
|---|---|---|
| ![Home Page](screenshots/ss1.png) | ![Detail Coin Page](screenshots/ss2.png)  | ![Order Book Page](screenshots/ss3.png)  |

Feel free to explore the app and leverage the provided API and WebSocket streams to access real-time cryptocurrency data and enhance your trading and investment experience. If you have any questions or need further assistance, please refer to the documentation or contact our support team. Happy trading!
