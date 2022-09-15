import * as React from 'react'
import { RouteObject } from 'react-router-dom'
import loadable from '@loadable/component'
import PostDetail from './app/postDetail/pages'
import ProfilePage from './app/profilePage/pages'

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
  PROFILE = '/profile'
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
