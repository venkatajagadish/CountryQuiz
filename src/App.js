import "./App.css";
import QuestionsProvider from "./store/quesions-context";
import Question from "./components/Question";
import QuestionsNavigator from "./components/QuestionsNavigator";
import Header from "./components/Header";

function App() {
  return (
    <QuestionsProvider>
      <div className="app-component">
        <Header />
        <div className="questions-pane">
          <QuestionsNavigator />
          <Question />
        </div>
      </div>
    </QuestionsProvider>
  );
}

export default App;
