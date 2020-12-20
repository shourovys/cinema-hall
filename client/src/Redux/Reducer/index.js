import { cinemaReducer } from './CinemaReducer';
import notificationsReducer from './notificationsReducer';
import { userInfoReducer } from './UserInfoReducer';
const { combineReducers } = require("redux");

export const rootReducer = combineReducers(
    {
        cinemaData: cinemaReducer,
        userInfo: userInfoReducer,
        notifications:notificationsReducer
        
    }
)