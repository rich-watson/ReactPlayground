/**
@author Richard Watson
*/
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function AlertDismissible() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Hello, there!</Alert.Heading>
        <p>
          “Neo, sooner or later you’re going to realize, just as I did, that
          there’s a difference between knowing the path and walking the path.”
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default AlertDismissible;
