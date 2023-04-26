import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/styles/common.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Siginup from "./pages/Siginup";
import Mypage from "./pages/Mypage";
import QuestionDetail from "./pages/Question/QuestionDetail";
import QuestionCreate from "./pages/Question/QuestionCreate";
import QuestionUpdate from "./pages/Question/QuestionUpdate";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Question from "./pages/Question/Question";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Siginup />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/question" element={<Question />}></Route>
        <Route path="/question/:id" element={<QuestionDetail />}></Route>
        <Route path="/question/create" element={<QuestionCreate />}></Route>
        <Route path="/question/update/:id" element={<QuestionUpdate />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
