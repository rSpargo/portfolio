import { RouteDefinition } from "@solidjs/router";
import Home from "./components/Home";
import Art from "./components/Art";

export type Route = RouteDefinition & {
    title?: string;
}

export const routes: Route[] = [
    {
        path: '/',
        component: Home
    },
    {
        title: 'Art',
        path: '/art',
        component: Art
    }
];