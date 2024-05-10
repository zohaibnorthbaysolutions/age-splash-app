import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from "./Splash.screen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' Component={SplashScreen} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
