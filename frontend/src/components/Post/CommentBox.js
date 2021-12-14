// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getComments } from "../../actions/comment.action";
// import { isEmpty } from "../../utils/Utils";

export default function CommentBox({ post }) {
//   const dispatch = useDispatch();
//   const commentData = useSelector((state) => state.commentReducer);
//   const userData = useSelector((state) => state.userReducer);
//   const usersData = useSelector((state) => state.usersReducer);
//   const [loadComment, setLoadComment] = useState(true);

//   useEffect(() => {
//     if (loadComment) {
//       dispatch(getComments());
//       setLoadComment(false);
//     }
//   }, [loadComment, dispatch]);

  return 
    // <div className="post-comments">
    //   {!isEmpty(commentData[0]) &&
    //     commentData.map((comment) => {
    //       if (post.id === comment.ArticleId) {
    //         return (
    //           <div className="content-comments" key={comment.comment.id}>
    //             <div className="post-comments-header">
    //               <div className="post-header-user">
    //                 <img
    //                   src={
    //                     !isEmpty(usersData[0]) &&
    //                     usersData.map((user) => {
    //                       if (user.id === comment.UserId) {
    //                         return user.imageUrl;
    //                       }
    //                     })
    //                   }
    //                   alt=""
    //                 />
    //                 <h5>
    //                   {!isEmpty(usersData[0]) &&
    //                     usersData.map((user) => {
    //                       if (user.id === comment.UserId) {
    //                         return user.username;
    //                       }
    //                     })}
    //                 </h5>
    //               </div>
    //               <p>
    //                 {!isEmpty(usersData[0]) &&
    //                   usersData.map((user) => {
    //                     if (user.isAdmin === "1") {
    //                       return (
    //                         <span>
    //                           <i
    //                             class="fa fa-trash"
    //                             id="deleteIcon"
    //                             aria-hidden="true"
    //                           ></i>
    //                         </span>
    //                       );
    //                     }
    //                   })}
    //               </p>
    //             </div>
    //             <div className="post-comments-main">
    //               <p>{comment.text}</p>
    //             </div>
    //           </div>
    //         );
    //       }
    //     })}
    // </div>
  
}
