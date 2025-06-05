import { useState, useEffect, createContext } from "react";
import getQuestions from "../util/getQuestions";
export const QuestionsContext = createContext({});

export default function QuestionsProvider({ children }) {
  const [questionsIndex, setQuestionsIndex] = useState(null);
  const [questionsList, setQuestionsList] = useState([]);
  const [resetQuiz, setResetQuiz] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      var questions = await getQuestions();
      setQuestionsList(questions);
      setQuestionsIndex(0);
    }
    fetchQuestions();
  }, [resetQuiz]);
  function setQuestion(index) {
    setQuestionsIndex(index);
  }
  function setReset() {
    setQuestionsIndex(null);
    setResetQuiz((prev) => !prev);
  }
  function setQuestionAsAnswered(selectedAnswer) {
    setQuestionsList((prev) => {
      const clonedState = [
        ...prev.map((question) => {
          return { ...question };
        }),
      ];
      clonedState[questionsIndex].isAnswered = true;
      clonedState[questionsIndex].selectedAnswer = selectedAnswer;
      return clonedState;
    });
  }
  var ctxValue = {
    questionsList: questionsList,
    setQuestion: setQuestion,
    currentQuestion: questionsList[questionsIndex],
    currentIndex: questionsIndex,
    setQuestionAsAnswered: setQuestionAsAnswered,
    setReset: setReset,
  };
  return questionsIndex != null ? (
    <QuestionsContext.Provider value={ctxValue}>
      {children}
    </QuestionsContext.Provider>
  ) : (
    <p>Your Quiz is loading</p>
  );
}
