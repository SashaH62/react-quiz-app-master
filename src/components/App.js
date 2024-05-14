import { useEffect, useReducer } from "react";
import Error from "./Error";
import Loading from "./Loading";
import StartScreen from "./StartScreen";

const initState = {
  questions: [],
  status: 'loading',
}

function reducer(state, action) {
  switch(action.type) {
    case 'dataReceived':
      return {...state, status: 'ready', questions: action.payload}
    case 'dataFailed':
      return {...state, status: 'error'}
    default:
      throw new Error ("Action not recognized");
  }
}

function App() {
  const [{questions, status}, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    fetch('http://localhost:8080/quizzes')
      .then((res) => res.json())
      .then((data) => dispatch({type: 'dataReceived', payload: data}))
      .catch((err) => dispatch({type: 'dataFailed'}))
  }, [])

  return (
    <div className="App">
      { status === 'loading' && <Loading/>}
      { status === 'error' && <Error/>}
      { status === 'ready' && <StartScreen/>}
    </div>
  );
}

export default App;
