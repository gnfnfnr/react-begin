import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Nav from './components/Nav';
import { RecoilRoot } from "recoil";
import Part from "./routes/Part";
function App() {
  return(
    <BrowserRouter>
        <Nav />
        <RecoilRoot>
          <Routes>
            <Route path={"/page/:detail"} element={<Part/>}/>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}></Route>
            <Route path={"/movie/:id"} element={<Detail/>}></Route>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
  )
}

export default App;
