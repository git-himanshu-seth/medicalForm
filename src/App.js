import "./App.css";
import HomePage from "./pages/home-page/home-page";
import { Routes, Route, useNavigate } from "react-router-dom";
import Summary from "./pages/summary/summary";

function App() {
  let navigate = useNavigate();
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage navigate={navigate} />} />
        <Route
          path='/summary'
          exact='true'
          element={<Summary navigate={navigate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
