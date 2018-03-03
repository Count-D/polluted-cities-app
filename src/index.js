import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from './App';
import MoreInfo from './components/SolutionsMore';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './Reducers';

const store = createStore(allReducers)

const Root = ()=>{
    return(
        <Router >
            <div>
    <Route exact path="/" component={App} />
    <Route path="/solutions" component={MoreInfo} />
    </div>
        </Router>
    );
}

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));
registerServiceWorker();
