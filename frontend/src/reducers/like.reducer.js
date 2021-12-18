import { DELETE_LIKE, GET_LIKES } from "../actions/like.action";


const initialState = {};

export default function likeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LIKES:
            return action.payload;
         case DELETE_LIKE:
             return state.filter((like) => like.id !== action.payload.likeId)
        default:
            return state
    }
}