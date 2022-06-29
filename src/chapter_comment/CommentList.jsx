import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "유정원",
        comment: "안녕하세요, 정원입니다.",
    },
    {
        name: "제이",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "Stranger",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;