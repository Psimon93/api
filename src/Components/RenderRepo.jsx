import ListGroup from "react-bootstrap/ListGroup";

export default function renderRepo({ userRepo }) {
  return (
    <ListGroup>
      {userRepo.map((i) => (
        <ListGroup.Item key={i.id}>{i.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}
