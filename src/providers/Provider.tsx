import * as React from "react";
import { GluestackUIProvider, config } from "@gluestack-ui/themed"
import { SafeAreaProvider } from "react-native-safe-area-context";

type ProviderProps = {
  children: React.ReactNode | React.ReactNode[]
}

export default function Provider({ children }: ProviderProps) {
  return (
    <GluestackUIProvider config={config.theme}>
      <SafeAreaProvider>
        {children}
      </SafeAreaProvider>
    </GluestackUIProvider>
  )
}
