import { use, useContext } from "react";
import { QuestionsContext } from "../store/quesions-context";
export default function Question() {
  const questionCtx = useContext(QuestionsContext);
  return (
    <>
      <p>{questionCtx.currentQuestion.question}</p>
    </>
  );
}
