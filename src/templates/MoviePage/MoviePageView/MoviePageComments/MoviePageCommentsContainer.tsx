import { useTypedSelector } from "customHooks/useTypedSelector";
import React, { useEffect, useState } from "react";
import MoviePageCommentsForm from "./MoviePageCommentsView/MoviePageCommentsForm/MoviePageCommentsForm";
import MoviePageCommentsView from "./MoviePageCommentsView/MoviePageCommentsData/MoviePageCommentsData";

export interface ICommentFields {
  name: string;
  comment: string;
}

export interface ICommentsData {
  [id: number]: ICommentFields[];
}

const MoviePageCommentsContainer = () => {
  const [commentFields, setCommentFields] = useState<ICommentFields>({
    name: "",
    comment: "",
  });
  const movieid = useTypedSelector(({ movies: { movie } }) => movie?.id);
  const [commentData, setCommentData] = useState<ICommentsData>({});

  const setComment = (value: string, key: keyof ICommentFields) => {
    const copycommentFields = {
      ...commentFields,
      [key]: value,
    };
    setCommentFields(copycommentFields);
  };

  const updateCommentData = (copyCommentData: ICommentsData) => {
    localStorage.setItem("commentData", JSON.stringify(copyCommentData));
    setCommentFields({
      name: "",
      comment: "",
    });
    setCommentData(copyCommentData);
  };

  const leaveComment = () => {
    if (commentFields.comment && commentFields.name && movieid) {
      if (commentData[movieid]) {
        let copyCommentData = {
          ...commentData,
          [movieid]: [...commentData[movieid], commentFields],
        };
        return updateCommentData(copyCommentData);
      }
      commentData[movieid] = [commentFields];
      return updateCommentData(commentData);
    }
  };

  const removeComment = (i: number) => {
    if (movieid) {
      if (commentData[movieid]) {
        let copyCommentData = {
          ...commentData,
          [movieid]: commentData[movieid].filter(
            (elem: any, index: number) => index !== i
          ),
        };
        localStorage.setItem("commentData", JSON.stringify(copyCommentData));
        setCommentData(copyCommentData);
      }
    }
  };

  let commentsUI = <div>Movie has no comments</div>;
  if (
    Object.keys(commentData).length !== 0 &&
    movieid &&
    commentData[movieid].length > 0
  ) {
    commentsUI = (
      <MoviePageCommentsView
        removeComment={removeComment}
        commentData={commentData[movieid]}
      />
    );
  }

  useEffect(() => {
    const copyCommentsJson = localStorage.getItem("commentData");
    if (copyCommentsJson) {
      const copyCommentsData: ICommentsData = JSON.parse(copyCommentsJson);
      setCommentData(copyCommentsData);
    }
  }, []);

  return (
    <>
      {commentsUI}
      <MoviePageCommentsForm
        setComment={setComment}
        leaveComment={leaveComment}
        value={commentFields}
      />
    </>
  );
};

export default MoviePageCommentsContainer;
