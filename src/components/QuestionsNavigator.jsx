import { use, useContext } from "react";
import { QuestionsContext } from "../store/quesions-context";
import classes from "./QuesttionsNavigator.module.css";
export default function QuestionsNavigator() {
  var questionsContext = useContext(QuestionsContext);
  console.log(questionsContext);
  return (
    <div className={classes["questions-navigator"]}>
      {questionsContext.questionsList.length > 0 &&
        questionsContext.questionsList.map((question, index) => {
          return (
            <button
              key={question.id}
              onClick={() => questionsContext.setQuestion(question.id)}
            >
              {index + 1}
            </button>
          );
        })}
    </div>
  );
}
