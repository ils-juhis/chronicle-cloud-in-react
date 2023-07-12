
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    reducers: reducer
})

const middleware = [thunk];

const store =createStore (
        rootReducer, 
        composeWithDevTools(applyMiddleware(...middleware))
    )

export default store;