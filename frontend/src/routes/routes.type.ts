export interface IRoute {
	path: string;
	component: React.LazyExoticComponent<React.FC>;
	exact?: boolean;
}
