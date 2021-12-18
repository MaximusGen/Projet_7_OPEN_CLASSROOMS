import axios from 'axios'

const token = localStorage.getItem('token');

export const GET_POSTS = " GET_POST"
export const CREATE_POST = " CREATE_POST"
export const UPDATE_POST = "UPDATE_POST"
export const DELETE_POST = " DELETE_POST"


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

export const createPost = (data) => {
    console.log(data);
    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_API_URL}api/article/`, data, {
            headers : { 'Authorization': 'Bearer ' + token}
        })
        .then(() => {
          dispatch({type: CREATE_POST, payload:""})
        })
        .catch((err) => console.log(err))
    }
}

export const updatePost = (ArticleId, text) => {
    return (dispatch) => {
        return axios ({
            method:"put",
            url: `${process.env.REACT_APP_API_URL}api/article/${ArticleId}`,
            headers: { 'Authorization': 'Bearer ' + token},
            data: {text}
        })
        .then(() => {
            dispatch({type: UPDATE_POST, payload: {text, ArticleId}})
        })
        .catch((err) => console.log(err))
    }
}
export const deletePost = (articleId) => {
    return (dispatch) => {
        return axios({
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}api/article/` + articleId,
            headers: { 'Authorization': 'Bearer ' + token}
        })
        .then(() => {
            dispatch({type:DELETE_POST, payload: {articleId}})
        })
        .catch((err) => console.log(err))
    }
}

