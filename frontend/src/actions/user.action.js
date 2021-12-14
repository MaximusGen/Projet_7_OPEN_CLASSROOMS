import axios from "axios";

const token = localStorage.getItem("token");

export const GET_USER = "GET_USER";
export const UPDATE_PICTURE = "UPDATE_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";

export const getUser = (uid) => {
  return (dispatch) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/auth/` + uid,
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const updatePicture = (data, userId) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/auth/` + userId,
      data: {data},
      headers: {
         Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
          console.log(data);
          dispatch({ type: UPDATE_PICTURE, payload: res.data.imageUrl });
        })
      .catch((err) => console.log(err));
  }
};

export const updateBio = (userId, bio) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/auth/` + userId,
      data: { bio },
      headers: { Authorization: "Bearer " + token },
    })
      .then(() => {
        dispatch({ type: UPDATE_BIO, payload: bio });
      })
      .catch((err) => console.log(err));
  };
};
