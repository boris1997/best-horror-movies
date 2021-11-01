import DeleteBinIcon from "icons/DeleteBinIcon";
import React, { FC, Fragment, MouseEventHandler } from "react";
import { ICommentFields } from "../../MoviePageCommentsContainer";
import MoviePageCommentsClasses from "./MoviePageCommentsData.module.scss";

interface IMoviePageCommentsData {
  commentData: ICommentFields[];
  removeComment: (movieid: number) => void;
}

const MoviePageCommentsData: FC<IMoviePageCommentsData> = ({
  commentData,
  removeComment,
}) => {
  const commentUI = commentData.map(({ comment, name }, i) => {
    return (
      <div key={i + name} className={MoviePageCommentsClasses.comment}>
        <div className={MoviePageCommentsClasses.commentItem}>
          <div>name: {name}</div>
          <div className={MoviePageCommentsClasses.text}>
            <div>comment:</div>
            <p>{comment}</p>
          </div>
        </div>
        <div className="">
          <DeleteBinIcon clicked={(e: MouseEventHandler) => removeComment(i)} />
        </div>
      </div>
    );
  });
  return <div className={MoviePageCommentsClasses.comments}>{commentUI}</div>;
};

export default MoviePageCommentsData;
