import axios from 'axios';

const token = localStorage.getItem('token');

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";

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


export const uploadPicture = (data, id) => {
    return (dispatch) => {
        return axios
        .post(`${process.env.REACT_APP_API_URL}api/auth/upload/${id}`,data , 
        {
            headers: { 'Authorization': 'Bearer ' + token}
        }
        )
        .then((res) => {
            return axios
            .get(`${process.env.REACT_APP_API_URL}api/auth/${id}`,
            {
                headers: { 'Authorization': 'Bearer ' + token}
            })
            .then((res) => {
                console.log(data);
                dispatch({ type: UPLOAD_PICTURE, payload: res.data.imageUrl})
            })
        })
        .catch((err) => console.log(err))
    }
}