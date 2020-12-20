import axios from 'axios';

const url = 'http://localhost:4000'

export const fetchCinema=()=>axios.get(`${url}/cinema/all`)
export const getSignalCinema=(cinemaId)=>axios.get(`${url}/cinema/${cinemaId}`)
export const updateCinema = (id, updatedCinema) => axios.patch(`${url}/cinema/${id}`, updatedCinema);
