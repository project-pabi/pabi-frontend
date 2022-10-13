import React from "react";
import "./App.css";
import Router from "./router";

function App() {
  // const [hello, setHello] = useState("");

  // const fetchUsers = async () => {
  //   const response = await axios.get("/hello");
  //   setHello(response.data); // 데이터는 response.data 안에 들어있습니다.
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return <Router />;
}

export default App;
