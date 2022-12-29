import { ViewPage } from "./components/ViewPage";
import { HomePage } from "./components/HomePage";
import { Header } from "./components/Header";
import "./App.css";

import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/View" element={<ViewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
