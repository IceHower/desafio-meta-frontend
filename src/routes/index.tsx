
import { Home } from '../pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => {
    return(
        <BrowserRouter>
            <Switch>
                
                <Route path="/">
                    <Home />
                </Route>

                <Route path="/">
                    <Home />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
