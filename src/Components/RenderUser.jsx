import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

export default function RenderUser({ userInfo }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={userInfo.avatar_url} />
      <Card.Body>
        <Card.Title>{userInfo.name}</Card.Title>
        <Card.Title>{userInfo.location}</Card.Title>
        <Card.Text>{userInfo.bio}</Card.Text>
      </Card.Body>
    </Card>
  );
}

RenderUser.propTypes = {
  userInfo: Array,
};
