import { useContext, useRef } from "react";
import { QuestionsContext } from "../store/quesions-context";
import Modal from "./Modal";
import congrats from "./../assets/congrats.png";
import classes from "./Header.module.css";
export default function Header() {
  const modalRef = useRef();
  const questionsCtx = useContext(QuestionsContext);
  const noOfCorrectAnswers = questionsCtx.questionsList.filter((question) => {
    return question.correctAnswer == question.selectedAnswer;
  }).length;
  const noOfAnsweredQuestions = questionsCtx.questionsList.filter(
    (question) => {
      return question.isAnswered;
    }
  ).length;
  const isShowModal =
    noOfAnsweredQuestions > 0 &&
    noOfAnsweredQuestions == questionsCtx.questionsList.length;
  if (isShowModal) {
    modalRef.current.open();
  }
  function closeModal() {
    questionsCtx.setReset();
  }
  return (
    <div className={classes.header}>
      <span>Country Quiz</span>
      <span className={classes.scorecard}>{noOfCorrectAnswers}/10 Points</span>
      <Modal ref={modalRef} closeModal={closeModal}>
        <img src={congrats} />
        <p>Congrats! You have completed the quiz</p>
        <p>You answered {noOfCorrectAnswers}/10 correctly</p>
      </Modal>
    </div>
  );
}
