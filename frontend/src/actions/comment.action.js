import axios from 'axios';

const token = localStorage.getItem('token');

export const GET_COMMENTS = "GET_COMMENTS";

export const getComments = () => {
    return (dispatch) => {
        return axios({
            method:"get",
            url:`${process.env.REACT_APP_API_URL}api/comment/`,
            headers: { 'Authorization': 'Bearer ' + token}
        })
        .then((res) => {
            dispatch({type: GET_COMMENTS, payload: res.data})
        })
        .catch((err) => {console.log(err);})
    }
}