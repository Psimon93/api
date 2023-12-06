import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Search from "./Components/Search";
import RenderUser from "./Components/RenderUser";
// import RenderUser from "./Components/RenderUser";

function App() {
  const [url, setUrl] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [userRepo, setUserRepo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const jsonResult = await result.json();
      setUserInfo(jsonResult);
    };
    fetchData();

    // const fetchData2 = async () => {
    //   const result = await fetch(url);
    //   const jsonResult = await result.json();
    //   setUserRepo(jsonResult);
    // };
    // fetchData();
  }, [url]);

  return (
    <div>
      <Search setUrl={setUrl} />
      <RenderUser userInfo={userInfo} />
      {/* <RenderUser userInfo={userInfo} /> */}
    </div>
  );
}

export default App;
