import { useContext } from "react";
import { QuestionsContext } from "../store/quesions-context";
import QuestionOption from "./QuestionOption";
import classes from "./Question.module.css";
export default function Question() {
  const questionCtx = useContext(QuestionsContext);
  const currentQuestion = questionCtx.currentQuestion;
  return (
    <div className={classes["question-container"]}>
      <p>{currentQuestion.question}</p>
      <div className={classes.options}>
        {currentQuestion.options.map((option) => {
          return <QuestionOption key={option}>{option}</QuestionOption>;
        })}
      </div>
    </div>
  );
}
