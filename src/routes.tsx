import { RouteObject } from "react-router-dom";
import loadable from '@loadable/component';

interface ExtendedRouteObject extends RouteObject {
    validation?: boolean,
    authorized?: boolean,
    restricted?: boolean,
    children?: ExtendedRouteObject[];
}

const Homepage = loadable(() => import('./app/Homepage/pages'));

export enum RoutePath {
    HOMEPAGE = '/homepage'
}

const routeObject: ExtendedRouteObject[] = [
    {
        path: '/',
        element: <Homepage />
    },
    {
        path: RoutePath.HOMEPAGE,
        element: <Homepage />
    }
];

const getRouteObject = (routes: ExtendedRouteObject[]): RouteObject[] => 
    routes.map((routeObject) => {
        let {element} = routeObject;

        routeObject.element = element;

        return routeObject as RouteObject;
    });

const getRoutes = (): RouteObject[] => getRouteObject(routeObject);

export default getRoutes;