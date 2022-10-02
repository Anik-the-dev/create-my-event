import logo from "./logo.svg";
import "./App.css";
import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Event from "./pages/Event";
import CreateEvent from "./pages/CreateEvent";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="event" element={<Event />}></Route>
      <Route path="create" element={<CreateEvent />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
