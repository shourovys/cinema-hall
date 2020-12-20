import { SET_ALL_CINEMA_DATA } from '../Action/CinemaAction';

const cinemaData = []


export const cinemaReducer = (state = cinemaData, action) => {

    switch (action.type) {
        case SET_ALL_CINEMA_DATA:
            return  action.payload
       
        default:
            return state
    }
}