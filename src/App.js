import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Store from "./components/Store";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Context from "./components/context/Context";
import Signup from "./components/Signup";
import { useContext } from "react";
import AuthContext from "./components/store/auth-context";
import Footer from "./components/footer/Footer";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Context>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          {authCtx.isLoggedIn ? (
            <Route path="/store" Component={Store} />
          ) : (
            <Route path="/store" Component={Login} />
          )}
          <Route path="/contact" Component={Contact} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Context>
  );
}

export default App;
