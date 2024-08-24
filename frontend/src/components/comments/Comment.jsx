/* eslint-disable react/prop-types */
import React from "react";
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

import images from "../../constants/images.js";
import CommentForm from "./CommentForm.jsx";
const Comment = ({
  comment,
  logginedUserId,
  affectedComment,
  setaffectedComment,
  addComment,
  parentId = null,
  updateComment,
  deleteComment,
  replies
}) => {
  const notify = () => toast.success("comment deleted");
  const isUserLoggedIn = Boolean(logginedUserId);
  const commentBelongsToUser = logginedUserId === comment.user._id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;
  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;
  const repliedCommentId = parentId ? parentId : comment._id;
  const replyOnUserId = comment.user._id;
  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#f2f4f5] p-3 rounded-lg">
      <Toaster
                  position="top-center"
                  reverseOrder={false}
                  gutter={8}
                  containerClassName=""
                  containerStyle={{}}
                  toastOptions={{
                    // Define default options
                    className: "",
                    duration: 5000,
                    style: {
                      background: "#363636",
                      color: "#fff",
                    },

                    // Default options for specific types
                    success: {
                      duration: 3000,
                      theme: {
                        primary: "green",
                        secondary: "black",
                      },
                    },
                  }}
                />
      <img
        src={images.avatarImage}
        className="object-center w-9 h-9 rounded-full"
      ></img>
      <div className="flex flex-1 flex-col">
        <h5>{comment?.user.name}</h5>
        <span className="mt-[2px] text-xs text-dark-light font-roboto ">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        {!isEditing && (
          <p className="mt-[10px] font-opensans text-dark-light">
            {comment.desc}
          </p>
        )}

        {isEditing && (
          <div>
            <CommentForm
              btnlabel="Update"
              formSubmitHandler={(value) => updateComment(value, comment._id)}
              formCancelHandler={() => setaffectedComment(null)}
              initialText={comment.desc}
            />
          </div>
        )}
        <div className="flex items-center gap-x-5 mt-3 text-sm mb-3">
          {isUserLoggedIn && (
            <button
              key={comment.id}
              className="flex gap-x-1 font-opensans font-normal text-dark-light  items-center"
              onClick={() =>
                setaffectedComment({ type: "replying", _id: comment._id })
              }
            >
              <FiMessageSquare className="w-4 h-auto" />
              reply
            </button>
          )}
          {commentBelongsToUser && (
            <div className="flex items-center gap-x-5">
              <button
                onClick={() =>
                  setaffectedComment({ type: "editing", _id: comment._id })
                }
                className="flex gap-x-1 font-opensans text-dark-light items-center"
              >
                <FiEdit2 className="w-4 h-auto" />
                edit
              </button>
              <button
                onClick={() => {
                  deleteComment(comment._id);
                notify()}}
                className="flex gap-x-1 font-opensans text-dark-light  items-center"
              >
                <FiTrash  className="w-4 h-auto" />
                
                delete
              </button>
              
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            formCancelHandler={() => setaffectedComment(null)}
            btnlabel="reply"
            formSubmitHandler={(value) =>
              addComment(value, repliedCommentId, replyOnUserId)
            }
          />
        )}
        {replies.length>0 &&
        (
          <div>
            {replies.map((reply)=>(
              <Comment key={reply._id} 
                
                addComment={addComment}
                affectedComment={affectedComment}
                setaffectedComment={setaffectedComment}
                comment={reply}
                deleteComment={deleteComment}
                logginedUserId={logginedUserId}
                replies={[]}
                updateComment={updateComment}
                parentId={comment._id}
              />

            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
