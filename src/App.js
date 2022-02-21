import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Nav from './components/Nav';

function App() {
  return(
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}></Route>
        <Route path={"/movie/:id"} element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
