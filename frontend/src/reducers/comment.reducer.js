import { GET_COMMENTS } from "../actions/comment.action";


const initialState = {}

export default function commentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return action.payload
        default:
            return state
    }
}