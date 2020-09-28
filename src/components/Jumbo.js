import React from "react";
import {
  Container,
  Jumbotron,
  Button,
  FormControl,
  Form,
  Col,
} from "react-bootstrap";
import imgUrl from "../assets/boats.jpeg";
import "../App.css";
const Jumbo = () => (
  <Jumbotron
    style={{
      backgroundImage: `url("${imgUrl}")`,
      backgroundSize: "cover",
    }}
  >
    {/* <h1>Wecome</h1> */}
    {/* <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p> */}
    {/* <Form>
        <FormControl type="text" placeholder="Search" className="mr-sm-0" />
        <Button
          type="submit"
          style={{ margin: "auto", display: "inline-block" }}
        >
          Submit
        </Button>
      </Form> */}
    {/* <div>
      <Form inline>
        <FormControl type="text" placeholder="Search" />
        <Button type="submit">Submit</Button>
      </Form>
    </div> */}

    <div>
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="Search" />
          </Col>
          <Col>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  </Jumbotron>
);

export default Jumbo;
