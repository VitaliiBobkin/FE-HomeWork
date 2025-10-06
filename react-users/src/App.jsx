import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./components/UserForm.jsx";
import UserList from "./components/UserList.jsx";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <h3>Add User</h3>
          <UserForm addUser={addUser} />
        </Col>

        <Col md={8}>
          <h3>Users List</h3>
          <UserList users={users} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
