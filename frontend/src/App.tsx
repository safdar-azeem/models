import React from 'react'
import {routes} from './routes'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { IRoute } from './routes/routes.type'

const App = () => {
    const renderRoutes = (routes:IRoute[]) => {
        return routes.map((route, index) => <Route key={index} {...route} />)
    }
    
    return (
        <div>
            <Router>
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
            </Router>
        </div>
    )
}

export default App