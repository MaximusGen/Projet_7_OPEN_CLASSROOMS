import axios from 'axios';
import Cookies from 'js-cookie';

export const GET_USER = "GET_USER";

export const getUser = () => {
    return (dispatch) => {
        return axios
        .get(`${process.env.REACT_APP_API_URL}api/auth/` + Cookies.get('userId'), 
        {
            headers: { 'Authorization': 'Bearer ' + Cookies.get("token")}
        }
        )
        .then((res) =>{
            dispatch({type: GET_USER, payload: res.data})
        })
        .catch((err) => console.log(err))
    }
}