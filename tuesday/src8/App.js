import React from "react";
import Alert from "./components/Alert";
import NameHeader from "./components/NameHeader"

function App() {
  return(
    <div>
      <NameHeader color="red" location = "Seattle" name="Joe"></NameHeader>
      <NameHeader color="red" location = "W. Seattle" name="Denis"/>
      <NameHeader color="yellow" location = "Kirkland" name="Aslan"/>
      <NameHeader color="salmon" location = "The Moon" name="Joanna"/>
      <NameHeader color="salmon" location = "Gold Bar" name="Zac"/>
      <Alert type="danger">Invalid user id or password</Alert>;
      <Alert>no type supplied</Alert>;
    </div>
  ) 
}

export default App;
