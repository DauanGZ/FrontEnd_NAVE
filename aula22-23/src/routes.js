import React from 'react';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Comments from './pages/Comments';
import CreatePot from './pages/CreatePost';

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/comments" component={Comments} />
            <Route path="/create-post" component={CreatePot} />
        </Switch>
    </BrowserRouter>
    );
}