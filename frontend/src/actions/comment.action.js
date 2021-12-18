import axios from 'axios';

const token = localStorage.getItem('token');

export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

export const getComments = () => {
    return (dispatch) => {
        return axios({
            method:"get",
            url:`${process.env.REACT_APP_API_URL}api/comment`,
            headers: { 'Authorization': 'Bearer ' + token}
        })
        .then((res) => {
            dispatch({type: GET_COMMENTS, payload: res.data})
        })
        .catch((err) => {console.log(err);})
    }
}

export const addComment = (articleId,text) => {
    return (dispatch) => {
        return axios({
            method:"post",
            url:`${process.env.REACT_APP_API_URL}api/comment/${articleId}`,
            data: {text},
            headers: { 'Authorization': 'Bearer ' + token},
        })
        .then(() => {
            dispatch({type: ADD_COMMENT, payload:""})
        })
        .catch((err) => console.log(err))
    }
}

export const deleteComment = (commentId) => {
    return (dispatch) => {
        return axios({
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}api/comment/` + commentId,
            headers: { 'Authorization': 'Bearer ' + token}
        })
        .then(() => {
            dispatch({type:DELETE_COMMENT, payload: {commentId}})
        })
        .catch((err) => console.log(err))
    }
}

export const updateComment = (commentId, text) => {
    return (dispatch) => {
        return axios ({
            method:"put",
            url: `${process.env.REACT_APP_API_URL}api/comment/${commentId}`,
            headers: { 'Authorization': 'Bearer ' + token},
            data: {text}
        })
        .then(() => {
            dispatch({type: UPDATE_COMMENT, payload: {text, commentId}})
        })
        .catch((err) => console.log(err))
    }
}