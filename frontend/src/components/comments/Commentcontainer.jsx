import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments.js";
import Comment from "./Comment.jsx";

const Commentcontainer = ({ className, logginedUserId }) => {
  const [comments, setComments] = useState([]);
  const mainComments = comments.filter((comments) => comments.parent === null);
  const [affectedComment, setaffectedComment] = useState(null);
  console.log(mainComments);
  console.log(comments);
  useEffect(() => {
    const getComments = async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    };
    getComments();
  }, []);
  const updateCommentHandler = (value, commentId) => {
    const updatedComments = comments.map((comment, index) => {
      if (comment._id === commentId) {
        return { ...comment, desc: value }; // something to change here in case of error
      }
      return comment;
    });
    setComments(updatedComments);
    setaffectedComment(null);
  };
  const deleteCommentHandler = (commentId) => {
    const updatedComments = comments.filter((comment) => {
      return comment._id !== commentId;
    });
    setComments(updatedComments);
  };
  const repliedCommentsHandler = (commentId) => {
    return comments
      .filter((comment) => comment.parent === commentId) // corrected filter function
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  };

  
  const addCommentHandler = (value, parent = null, replyonUser = null) => {
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyonUser,

      createdAt: new Date().toISOString(),
    };
    setComments([...comments, newComment]); //changes are there in case of any error try to fix it
    setaffectedComment(null);
  };
  return (
    <div className={`${className}`}>
      <CommentForm
        btnlabel="send"
        formSubmitHandler={(value) => addCommentHandler(value)}
      />
      <div className="space-y-4 mt-8">
        {mainComments?.map((items, index) => {
          return (
            <Comment
              key={index}
              comment={items}
              logginedUserId={logginedUserId}
              affectedComment={affectedComment}
              setaffectedComment={setaffectedComment}
              addComment={addCommentHandler}
              updateComment={updateCommentHandler}
              deleteComment={deleteCommentHandler}
              replies={repliedCommentsHandler(items._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Commentcontainer;
