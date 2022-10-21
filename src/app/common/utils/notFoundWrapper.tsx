import * as React from 'react'
import { useLocation } from 'react-router-dom'
import NotFoundPlaceholder from '../molecules/notFoundPlaceholder'
import { PropsWithChildren } from 'react'

interface NotFoundWrapperProps {
  queryStrings: string[]
}

const NotFoundWrapper: React.FC<PropsWithChildren<NotFoundWrapperProps>> = ({ queryStrings, children }): any => {
  const params = new URLSearchParams(useLocation().search)

  for (const query of queryStrings) {
    if (Number(params.get(query)) === 0) return <NotFoundPlaceholder/>
  }

  return children
}

export default NotFoundWrapper
