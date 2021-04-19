import { applyMiddleware, createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'connected-react-router';

export const history = createHistory();

const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
      } else {
        // Enable additional logging in non-production environments.
        return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger())
      }
};



export const store = createStore()