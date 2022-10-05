import React, { PropsWithChildren, useContext } from 'react'

const assetsSrcMap = {
  back: 'back.png',
  comment: 'comment.png',
  ghost: 'ghost.gif',
  logo: 'logo.png',
  user: 'user.png'
}

type ImageAssets = keyof typeof assetsSrcMap

interface ContextType {
  getAsset: (name: ImageAssets) => string
}

interface Props {
  assetsMap: any
}

const AssetsContext = React.createContext<ContextType>({ getAsset: (name: ImageAssets) => '' })

export const AssetsProvider = (props: PropsWithChildren<Props>): JSX.Element => {
  const getAsset = React.useCallback(
    (name: ImageAssets): string => {
      return props.assetsMap[`assets/${assetsSrcMap[name]}`] ?? ''
    }, [])

  return <AssetsContext.Provider value={{ getAsset }}>{props.children}</AssetsContext.Provider>
}

export const useAssets = (): ContextType => useContext(AssetsContext)
