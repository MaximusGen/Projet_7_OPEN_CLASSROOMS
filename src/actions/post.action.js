import axios from 'axios'

const token = localStorage.getItem('token');

export const GET_POSTS = " GET_POST"

export const getPosts = () => {
    return (dispatch) => {
        return axios ({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/article`,
            headers : { 'Authorization': 'Bearer ' + token}
        })
        .then((res) => {
            dispatch({type:GET_POSTS, payload: res.data})
        })
        .catch((err) => {console.log(err);})
    }
}