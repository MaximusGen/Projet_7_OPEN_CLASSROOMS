// import axios from 'axios';


// const token = localStorage.getItem('token');

// export const GET_LIKES = "GET_LIKES"
// export const ADD_LIKES = "ADD_LIKES"
// export const DELETE_LIKE = "DELETE_LIKE"


// export const getLikes = (postId) => {
//     return (dispatch) => {
//         return axios({
//             method:'get',
//             url:`${process.env.REACT_APP_API_URL}api/article/likes/${postId}`,
//             headers: { 'Authorization': 'Bearer ' + token}
//         })
//         .then((res) => {
//             dispatch({type: GET_LIKES, payload: res.data})
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     }
// }


// export const addLikes = (articleId) => {
//     return (dispatch) => {
//         return axios({
//             method:'post',
//             url: `${process.env.REACT_APP_API_URL}api/article/likes/${articleId}`,
//             headers: { 'Authorization': 'Bearer ' + token}
//         })
//         .then(() => {
//             dispatch({type: ADD_LIKES, payload:""})
//         })
//         .catch((err) => console.log(err)
//         )
//     }
// }


// export const  deleteLike = (likeId) => {
//     return (dispatch) => {
//         return axios({
//             method: "delete",
//             url: `${process.env.REACT_APP_API_URL}api/article/likes/` + likeId,
//             headers: { 'Authorization': 'Bearer ' + token}
//         })
//         .then(() => {
//             dispatch({type:DELETE_LIKE, payload: {likeId}})
//         })
//         .catch((err) => console.log(err))
//     }
// }
