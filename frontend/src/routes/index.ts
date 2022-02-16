import { lazy } from 'react';
import { IRoute } from './routes.type';

export const routes: IRoute[] = [
	{
		path: '/',
		component: lazy(() => import('../pages/Home')),
		exact: true,
	},
	{
		path: '/upload',
		component: lazy(() => import('../pages/Upload')),
		exact: true,
	},
];