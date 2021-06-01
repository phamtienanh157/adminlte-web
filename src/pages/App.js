import Login from "../components/Login.jsx";
import Home from "../components/Home.jsx";
import { useState } from "react";

function App(props) {
  const [isLogined, setIsLogined] = useState(false);

  const callBack = (e) => {
    setIsLogined(e);
  };

  return <div>{isLogined ? <Home /> : <Login handleLogin={callBack} />}</div>;
}
export default App;
