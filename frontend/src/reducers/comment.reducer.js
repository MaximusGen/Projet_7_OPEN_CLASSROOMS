import { GET_COMMENTS, DELETE_COMMENT, UPDATE_COMMENT } from "../actions/comment.action";


const initialState = {}

export default function commentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return action.payload;
        case DELETE_COMMENT:
           return state.filter(comment => comment.id !== action.payload.commentId);
        case UPDATE_COMMENT:
           return state.map((comment) => {
               if(comment.id === action.payload.commentId) {
                   return {
                       ...comment,
                       text:action.payload.text
                   }
               } else return comment
           })
        default:
            return state
    }
}