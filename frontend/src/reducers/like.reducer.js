import { GET_LIKES } from "../actions/like.action";


const initialState = {};

export default function likeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LIKES:
            return action.payload;
        default:
            return state
    }
}