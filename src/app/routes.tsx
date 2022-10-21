import * as React from 'react'
import { RouteObject } from 'react-router-dom'
import PostDetail from './postDetail/pages'
import ProfilePage from './profilePage/pages'
import AlbumPhotoPage from './albumPhotosPage/pages'
import NotFoundPlaceholder from './common/molecules/notFoundPlaceholder'
import EnlargedPhotoPage from './enlargedPhotoPage/pages/indext'
import Homepage from './homepage/pages'
import NotFoundWrapper from './common/utils/notFoundWrapper'

interface ExtendedRouteObject extends RouteObject {
  validation?: boolean
  authorized?: boolean
  restricted?: boolean
  children?: ExtendedRouteObject[]
}

export enum RoutePath {
  HOMEPAGE = '/homepage',
  POST_DETAIL = '/post-detail',
  PROFILE = '/profile',
  ALBUM_PHOTOS = '/album-photos',
  ENLARGED_PHOTO = '/enlarged-photo'
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
    element:
      <NotFoundWrapper queryStrings={['userId', 'postId']}>
        <PostDetail />
      </NotFoundWrapper>
  },
  {
    path: RoutePath.PROFILE,
    element:
      <NotFoundWrapper queryStrings={['userId']}>
        <ProfilePage />
      </NotFoundWrapper>
  },
  {
    path: RoutePath.ALBUM_PHOTOS,
    element:
      <NotFoundWrapper queryStrings={['albumId']}>
        <AlbumPhotoPage />
      </NotFoundWrapper>
  },
  {
    path: RoutePath.ENLARGED_PHOTO,
    element:
      <NotFoundWrapper queryStrings={['photoId']}>
        <EnlargedPhotoPage />
      </NotFoundWrapper>
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
