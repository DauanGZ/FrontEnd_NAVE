import React from 'react';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Comments from './pages/Comments';

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/comments" component={Comments} />
        </Switch>
    </BrowserRouter>
    );
}