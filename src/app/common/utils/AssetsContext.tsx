import React, { PropsWithChildren, useContext } from 'react'

interface ContextType {
  getAsset: (name: string) => string
}

const AssetsContext = React.createContext<ContextType>({ getAsset: (name: string) => '' })

export const AssetsProvider = (props: PropsWithChildren<{assetsMap: any}>): JSX.Element => {
  const getAsset = (name: string): string => {
    const asset = props.assetsMap[`assets/${name}`]
    return asset ?? ''
  }

  return <AssetsContext.Provider value={{ getAsset }}>{props.children}</AssetsContext.Provider>
}

export const useAssets = (): ContextType => useContext(AssetsContext)
