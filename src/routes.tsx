import * as React from 'react'
import { RouteObject } from 'react-router-dom'
import loadable from '@loadable/component'
import PostDetail from './app/postDetail/pages'
import ProfilePage from './app/profilePage/pages'
import AlbumPhotoPage from './app/albumPhotosPage/pages'

interface ExtendedRouteObject extends RouteObject {
  validation?: boolean
  authorized?: boolean
  restricted?: boolean
  children?: ExtendedRouteObject[]
}

const Homepage = loadable(async () => await import('./app/homepage/pages'))

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
