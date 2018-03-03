import {combineReducers} from 'redux';
import Cities from './Reducers/cities';
import activeCity from './Reducers/Reducer-2';

const allReducers = combineReducers({
    cities: Cities,
    activeCity: activeCity
});

export default allReducers