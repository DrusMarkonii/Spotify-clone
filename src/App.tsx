import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import { RootState } from "./store/rootReducer";

function App() {
  const counter = useSelector((state: RootState) => {
    return state.counter.counter;
  });
  const users = useSelector((state: RootState) => {
    return state.users.users;
  });

  console.log(users)

  return (
    <div className="App">
      <header className="App-header">
        hello
        {counter}
        <div>
          <Counter />
        </div>
      </header>
    </div>
  );
}

export default App;
