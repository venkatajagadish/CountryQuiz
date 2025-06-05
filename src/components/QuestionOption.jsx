import correct from "./../assets/Check_round_fill.svg";
import wrong from "./../assets/Close_round_fill.svg";
import { useContext } from "react";
import { QuestionsContext } from "../store/quesions-context";
import classes from "./QuestionOption.module.css";

export default function QuestionOption({ children }) {
  const questionsCtx = useContext(QuestionsContext);
  const currentQuestion = questionsCtx.currentQuestion;
  function setQuestionAsAnswered() {
    if (!currentQuestion.isAnswered) {
      questionsCtx.setQuestionAsAnswered(children);
    }
  }
  return (
    <div
      className={`${classes.option} ${
        currentQuestion.isAnswered ? classes.disable : undefined
      } ${
        currentQuestion.selectedAnswer == children
          ? classes.highlight
          : undefined
      }`}
      onClick={setQuestionAsAnswered}
    >
      <span className={classes["option-text"]}>{children}</span>
      {currentQuestion.isAnswered &&
        currentQuestion.correctAnswer == children && <img src={correct} />}
      {currentQuestion.isAnswered &&
        currentQuestion.correctAnswer != children &&
        currentQuestion.selectedAnswer == children && <img src={wrong} />}
    </div>
  );
}
