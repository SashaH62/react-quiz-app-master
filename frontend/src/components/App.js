import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Error from "./Error";
import Loading from "./Loading";
import StartScreen from "./StartScreen";
import Main from "./Main";
import Questions from "./Questions";
import Header from "./Header";
import ResultsScreen from "./ResultsScreen";

const initState = {
  questions: [],
  status: "loading",
  catIndex: 0,
  questionIndex: 0,
  selectedAnswer: null,
  submittedAnswer: false,
  correctAnswerIndex: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      console.log(action.payload);
      return { ...state, status: "ready", questions: action.payload };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startGame":
      return { ...state, status: "running", catIndex: action.payload };
    case "setAnswer":
      return {
        ...state,
        selectedAnswer: action.payload.answer,
        correctAnswerIndex: action.payload.currCorrectAnswer,
      };
    case "submitAnswer":
      return {
        ...state,
        submittedAnswer: true,
        points:
          state.correctAnswerIndex === state.selectedAnswer
            ? state.points + 1
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        selectedAnswer: null,
        submittedAnswer: false,
        questionIndex: state.questionIndex + 1,
      };
    case "gameCompleted":
      return { ...state, status: "completed" };
    case "resetGame":
      return {
        ...state,
        status: "ready",
        points: 0,
        catIndex: 0,
        questionIndex: 0,
        submittedAnswer: false,
        correctAnswerIndex: null,
        selectedAnswer: null,
      };
    default:
      throw new Error("Action not recognized");
  }
}

function App() {
  const [
    {
      questions,
      status,
      catIndex,
      questionIndex,
      selectedAnswer,
      submittedAnswer,
      points,
    },
    dispatch,
  ] = useReducer(reducer, initState);

  useEffect(() => {
    // fetch("http://localhost:8080/quizzes")
    //   .then((res) => res.json())
    //   .then((data) => dispatch({ type: "dataReceived", payload: data }))
    //   .catch((err) => dispatch({ type: "dataFailed" }));

    axios
      .get("/api/data/data.json")
      .then((response) => {
        dispatch({ type: "dataReceived", payload: response.data.quizzes });
      })
      .catch((error) => {
        dispatch({ type: "dataFailed" });
      });
  }, []);

  const [colorScheme, setColorScheme] = useState("light");

  const numQuestions = questions[catIndex]
    ? questions[catIndex].questions.length
    : 0;

  return (
    <div className={`App ${colorScheme}`}>
      <Header
        status={status}
        questions={questions}
        catIndex={catIndex}
        setColorScheme={setColorScheme}
        colorScheme={colorScheme}
      />
      <Main>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen questions={questions} dispatch={dispatch} />
        )}
        {status === "running" && (
          <Questions
            questions={questions[catIndex].questions[questionIndex]}
            numQuestions={numQuestions}
            questionIndex={questionIndex}
            dispatch={dispatch}
            selectedAnswer={selectedAnswer}
            submittedAnswer={submittedAnswer}
          />
        )}
        {status === "completed" && (
          <ResultsScreen
            points={points}
            numQuestions={numQuestions}
            catIndex={catIndex}
            questions={questions}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
