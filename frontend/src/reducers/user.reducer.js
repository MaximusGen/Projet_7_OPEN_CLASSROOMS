import { GET_USER, UPDATE_PICTURE, UPDATE_BIO } from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPDATE_PICTURE:
      return {
        ...state,
        imageUrl: action.payload,
      };
    case UPDATE_BIO:
      return {
        ...state,
        bio: action.payload,
      };
    default:
      return state;
  }
}
