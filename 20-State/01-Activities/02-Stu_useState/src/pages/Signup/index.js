import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

const Signup = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
  };

  // const [developerState, setDeveloperState] = useState({
  //   name: "trace",
  //   password: "1234"
  // });

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input className="form-control" type="text" placeholder="Username" name="username" onChange={e => setUsername(e.target.value)} />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <button onClick={() => setDeveloperState({...developerState, name: "Kyle", password: "hello"})} className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {developerState.name}!</h3>
          <p>I probably shouldn't tell you this, but your password is {developerState.password}!</p>
        </Container>
      </form>
    </div>
  );
};

export default Signup;
