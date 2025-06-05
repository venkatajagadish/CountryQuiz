import { useContext } from "react";
import { QuestionsContext } from "../store/quesions-context";
import classes from "./QuesttionsNavigator.module.css";
import QuestionNavigatorItem from "./QuestionNavigatorItem";
export default function QuestionsNavigator() {
  var questionsContext = useContext(QuestionsContext);
  return (
    <div className={classes["questions-navigator"]}>
      {questionsContext.questionsList.length > 0 &&
        questionsContext.questionsList.map((question, index) => {
          return (
            <QuestionNavigatorItem
              key={question.id}
              index={index}
              setQuestion={questionsContext.setQuestion}
              className={
                question.isAnswered || questionsContext.currentIndex == index
                  ? classes["answered-item"]
                  : undefined
              }
            />
          );
        })}
    </div>
  );
}
