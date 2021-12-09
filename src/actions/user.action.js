import axios from 'axios';

const token = localStorage.getItem('token');

export const GET_USER = "GET_USER";

export const getUser = (uid) => {
    return (dispatch) => {
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/auth/${uid}`, 
        {
            headers: { 'Authorization': 'Bearer ' + token}
        }
        )
        .then((res) =>{
            dispatch({type: GET_USER, payload: res.data})
        })
        .catch((err) => console.log(err))
    }
}