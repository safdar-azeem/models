import React from 'react'
import {routes} from './routes'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { IRoute } from './routes/routes.type'
import { Box } from '@mui/material'

const App = () => {
    const renderRoutes = (routes:IRoute[]) => {
        return routes.map((route, index) => <Route key={index} {...route} />)
    }

    return (
			<div>
				<Router>
					<Switch>
						<Box
							sx={{
								paddingLeft: '12rem',
								paddingRight: '12rem',
                                paddingTop: '1rem',
                                '@media screen and (max-width: 900px)': {
                                    paddingLeft: '2.5rem',
                                    paddingRight: '2.5rem',
                                },
							}}
						>
							{renderRoutes(routes)}
						</Box>
					</Switch>
				</Router>
			</div>
		);
}

export default App