import { useState, useEffect, createContext } from "react";
import getQuestions from "../util/getQuestions";
export const QuestionsContext = createContext({});

export default function QuestionsProvider({ children }) {
  const [questionsIndex, setQuestionsIndex] = useState(null);
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      var questions = await getQuestions();
      console.log(questions);
      setQuestionsList(questions);
      setQuestionsIndex(0);
    }
    fetchQuestions();
  }, []);
  function setQuestion(index) {
    setQuestionsIndex(index);
  }
  var ctxValue = {
    questionsList: questionsList,
    setQuestion: setQuestion,
    currentQuestion: questionsList[questionsIndex],
  };
  return questionsIndex != null ? (
    <QuestionsContext.Provider value={ctxValue}>
      {children}
    </QuestionsContext.Provider>
  ) : (
    <p>Your Quiz is loading</p>
  );
}
