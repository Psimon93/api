import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Search from "./Components/Search";
import RenderUser from "./Components/RenderUser";
import RenderRepo from "./Components/RenderRepo";
import Button from "react-bootstrap/Button";
import { TitleClass } from "./Components/TitleClass";

function App() {
  const [url, setUrl] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [userRepo, setUserRepo] = useState([]);

  function reset() {
    setUserInfo([]);
    setUserRepo([]);
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const jsonResult = await result.json();
      setUserInfo(jsonResult);
    };
    fetchData();

    const fetchData2 = async () => {
      const result = await fetch(url + "/repos");
      const jsonResult = await result.json();
      setUserRepo(jsonResult);
    };
    fetchData2();
  }, [url]);

  return (
    <div>
      <Search setUrl={setUrl} />
      <RenderUser userInfo={userInfo} />
      {userRepo.length !== 0 && <TitleClass title="Repository list:" />}
      <RenderRepo userRepo={userRepo} />
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default App;
