import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import navList from "./atom/navList";
import Part from "./routes/Part";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}></Route>
        <Route path={"/movie/:id"} element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
