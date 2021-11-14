import authorizeReducer from './authorizeReducer'
import { combineReducers } from 'redux'
const allReducers = combineReducers(
    {
        authorizeReducer
    }
);

export type RootState = ReturnType<typeof allReducers>
export default allReducers