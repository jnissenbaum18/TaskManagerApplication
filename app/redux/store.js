import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/root.reducer';

const enhancerList = [];
const middlewareList = [thunk, logger];

const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(applyMiddleware(...middlewareList), ...enhancerList);

export default initStore = () => createStore(rootReducer, {}, composedEnhancer);