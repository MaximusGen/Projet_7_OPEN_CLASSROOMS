import { GET_POSTS,UPDATE_POST,DELETE_POST } from "../actions/post.action";

const initialState = {};


export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case UPDATE_POST:
            return state.map((post) => {
                if(post.id === action.payload.ArticleId){
                    return {
                        ...post,
                        text:action.payload.text
                    }
                } else return post
            })
        case DELETE_POST:
            return state.filter((post) => post.id !== action.payload.articleId)
        default:
            return state;
    }
}