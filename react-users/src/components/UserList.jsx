import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function UserList({ users }) {
  if (!users.length) return <p>List empty.</p>;

  return (
    <Row>
      {users.map((user, index) => (
        <Col md={6} key={index} className="mb-3">
          <Card>
            {user.photo && (
              <Card.Img
                variant="top"
                src={user.photo}
                style={{ height: "200px", objectFit: "cover" }}
              />
            )}
            <Card.Body>
              <Card.Title>
                {user.firstName} {user.lastName}
              </Card.Title>
              <Card.Text>Вік: {user.age}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default UserList;
