// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { addLikes, deleteLike, getLikes } from '../../actions/like.action';


// export default function LikeButton({post}) {
//     const [liked, setLiked] = useState(false)
//     const likeData = useSelector(state => state.likeReducer)
//     const dispatch = useDispatch();
//     const uid = localStorage.getItem('userId');

//     useEffect(() => {
//        if(likeData.UserId === uid){
//            setLiked(true)
//        } else {
//            setLiked(false)
//        }
//     }, [likeData.UserId, uid, liked])


//     const handleLike =  async () => {
//         await dispatch(addLikes(post.id));
//         dispatch(getLikes());
//         setLiked(true)
//       }

//       const handleUnlike = async () => {
//          await dispatch(deleteLike(post.id))
//          dispatch(getLikes());
//          setLiked(false)
//       }

//     return (
//        <>   
//        {uid && liked === false && (
//         <i onClick={handleLike} className="far fa-thumbs-up m-4"></i>
//        )}
//        {uid && liked === true && (
//         <i onClick={handleUnlike} className="fas fa-thumbs-up"></i>
//        )}
//        </>
//     )
// }
