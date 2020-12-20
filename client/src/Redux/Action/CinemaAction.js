import * as api from '../../Api'
import { successNF } from './notificationsAction'
export const SET_ALL_CINEMA_DATA = 'SET_ALL_CINEMA_DATA'
export const UPDATE_CINEMA_DATA = 'UPDATE_CINEMA_DATA'

export const fetchAllCinema = () => async (dispatch)=> {
    try {
        const {data}= await api.fetchCinema()

        dispatch({type:SET_ALL_CINEMA_DATA, payload:data})
    } catch (error) {
        console.log("🚀 ~ file: FoodsDataAction.js ~ line 15 ~ fetchAllProduct ~ error", error)
    }
}

export const updatePost = (id, UpdatedData) => async (dispatch) => {
    try {
      const { data } = await api.updateCinema(id, UpdatedData);
        if (data) {
          dispatch(successNF('your seats successfully booked'))
        }
    } catch (error) {
      console.log(error);
    }
  };

