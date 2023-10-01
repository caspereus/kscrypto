import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import NetInfo from '@react-native-community/netinfo';


export type ConnectionProviderProps = {
  children: ReactNode
}

type ConnectionContextProps = {
  isConnected: boolean
}

const ConnectionContext = createContext<ConnectionContextProps>({ isConnected: true });

export const useConnection = () => {
  return useContext(ConnectionContext)
}

export default function ConnectionProvider({ children }: ConnectionProviderProps) {
  const [isConnected, setConnected] = useState(true)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnected(state.isConnected ?? false)
    });

    return unsubscribe();
  }, [])

  return (
    <>
      <ConnectionContext.Provider value={{ isConnected }}>
        {children}
      </ConnectionContext.Provider>
    </>
  )
}