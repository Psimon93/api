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

  const fetchData = async () => {
    const result = await fetch(url);
    if (result.ok) {
      const jsonResult = await result.json();
      setUserInfo(jsonResult);
    } else {
      reset();
    }
  };

  const fetchData2 = async () => {
    const result = await fetch(url + "/repos");
    if (result.ok) {
      const jsonResult = await result.json();
      setUserRepo(jsonResult);
    } else {
      reset();
    }
  };

  useEffect(() => {
    fetchData();
    fetchData2();
  }, [url]);

  return (
    <div>
      <Search setUrl={setUrl} />
      {userRepo.length == 0 && <div> No result </div>}
      <RenderUser userInfo={userInfo} />
      {userRepo.length !== 0 && <TitleClass title="Repository list:" />}
      <RenderRepo userRepo={userRepo} />
      <Button onClick={() => reset()}>Reset</Button>
    </div>
  );
}

export default App;
