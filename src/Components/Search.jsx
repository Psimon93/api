import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Search({ setUrl }) {
  const [name, setName] = useState("");

  function search(e) {
    setName(e.target.value);
  }

  function submit() {
    setUrl("https://api.github.com/users/" + name);
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Github User"
          value={name}
          type="text"
          onChange={search}
        />
        <Button variant="outline-primary" onClick={submit}>
          Search
        </Button>
      </InputGroup>
    </div>
  );
}
