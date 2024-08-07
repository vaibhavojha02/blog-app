import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments.js";
import Comment from "./Comment.jsx";

const Commentcontainer = ({ className,logginedUserId }) => {
  const [comments, setComments] = useState([]);
  const mainComments = comments.filter((comments)=> comments.parent===null)
  const [affectedComment, setaffectedComment] = useState(null)
  console.log(mainComments)
  console.log(comments);
  useEffect(() => {
    const getComments = async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    };
    getComments();
  }, []);
  const addCommentHandler = (value, parent = null, replyonUser = null) => {
    const newComment = {
      id: "13",
      user: {
        _id: "c",
        name: "Jessica C. Stephens",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyonUser,

      createdAt: "2022-12-31T17:22:05.092+0000",
    };
    setComments([...comments,newComment]);
  };
  return (
    <div className={`${className}`}>
      <CommentForm
        btnlabel="send"
        formSubmitHandler={(value) => addCommentHandler(value)}
      />
      <div className="space-y-4 mt-8">
       {mainComments?.map((items,index)=> {
        return <Comment key={index} comment = {items} logginedUserId={logginedUserId} affectedComment ={affectedComment} setaffectedComment={setaffectedComment} addComment = {addCommentHandler}/>
       })}
      </div>
    </div>
  );
};

export default Commentcontainer;
