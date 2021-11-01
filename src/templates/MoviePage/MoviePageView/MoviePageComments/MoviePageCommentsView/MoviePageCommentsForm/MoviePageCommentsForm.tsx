import Button, { ButtonTypes } from "components/Button/Button";
import FormElement from "components/FormElement/FormElement";
import React, { ChangeEvent, FC } from "react";
import { ICommentFields } from "../../MoviePageCommentsContainer";
import moviePageCommentsFormClasses from "./MoviePageCommentsForm.module.scss";

interface IMoviePageCommentsForm {
  setComment: (value: string, key: keyof ICommentFields) => void;
  value: ICommentFields;
  leaveComment: any;
}

const MoviePageCommentsForm: FC<IMoviePageCommentsForm> = ({
  setComment,
  value: { comment, name },
  leaveComment,
}) => {
  const elementConfigText = {
    name: "Textarea",
  };
  const elementConfigInput = {
    name: "Name",
  };
  return (
    <form className={moviePageCommentsFormClasses.form}>
      <FormElement
        elementType={"input"}
        elementConfig={elementConfigInput}
        changed={(e: ChangeEvent<HTMLInputElement>) =>
          setComment(e.target.value, "name")
        }
        value={name}
      >
        имя
      </FormElement>
      <FormElement
        elementType={"textarea"}
        elementConfig={elementConfigText}
        changed={(e: ChangeEvent<HTMLInputElement>) =>
          setComment(e.target.value, "comment")
        }
        value={comment}
      >
        Textarea
      </FormElement>
      <Button
        clicked={(e: any) => {
          e.preventDefault();
          leaveComment();
        }}
        type={ButtonTypes.main}
      >
        Leave comment
      </Button>
    </form>
  );
};

export default MoviePageCommentsForm;
