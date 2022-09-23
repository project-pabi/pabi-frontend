import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Write from "./pages/Write/Write";

function App() {
  // const [hello, setHello] = useState("");

  // const fetchUsers = async () => {
  //   const response = await axios.get("/hello");
  //   setHello(response.data); // 데이터는 response.data 안에 들어있습니다.
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Write />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
