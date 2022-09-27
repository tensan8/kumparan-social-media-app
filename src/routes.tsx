import * as React from 'react'
import { RouteObject } from 'react-router-dom'
import loadable from '@loadable/component'
import PostDetail from './Pages/PostDetail/Pages'
import ProfilePage from './Pages/ProfilePage/Pages'
import AlbumPhotoPage from './Pages/AlbumPhotosPage/Pages'
import NotFoundPlaceholder from './Common/Molecules/notFoundPlaceholder'

interface ExtendedRouteObject extends RouteObject {
  validation?: boolean
  authorized?: boolean
  restricted?: boolean
  children?: ExtendedRouteObject[]
}

const Homepage = loadable(async () => await import('./Pages/Homepage/Pages'))

export enum RoutePath {
  HOMEPAGE = '/homepage',
  POST_DETAIL = '/post-detail',
  PROFILE = '/profile',
  ALBUM_PHOTOS = '/album-photos'
}

const routeObject: ExtendedRouteObject[] = [
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: RoutePath.HOMEPAGE,
    element: <Homepage />
  },
  {
    path: RoutePath.POST_DETAIL,
    element: <PostDetail />
  },
  {
    path: RoutePath.PROFILE,
    element: <ProfilePage />
  },
  {
    path: RoutePath.ALBUM_PHOTOS,
    element: <AlbumPhotoPage />
  },
  {
    path: '*',
    element: <NotFoundPlaceholder />
  }
]

const getRouteObject = (routes: ExtendedRouteObject[]): RouteObject[] =>
  routes.map((routeObject) => {
    const { element } = routeObject

    routeObject.element = element

    return routeObject as RouteObject
  })

const getRoutes = (): RouteObject[] => getRouteObject(routeObject)

export default getRoutes
