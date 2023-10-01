import * as React from 'react';
import { GluestackUIProvider, config } from '@gluestack-ui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import ConnectionProvider from './ConnectionProvder';

interface ProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

export default function Provider({ children }: ProviderProps) {
  const queryClient = new QueryClient();

  return (
    <GluestackUIProvider config={config.theme}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ConnectionProvider>
            {children}
          </ConnectionProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </GluestackUIProvider>
  );
}
