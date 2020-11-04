import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json"

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {/* <FriendCard name={friends[0].name} job={friends[0].occupation} place={friends[0].location} image={friends[0].image}/>
      <FriendCard name={friends[1].name} job={friends[1].occupation} place={friends[1].location} image={friends[1].image}/>
      <FriendCard name={friends[2].name} job={friends[2].occupation} place={friends[2].location} image={friends[2].image}/> */}
      <FriendCard friend={friends[0]}/>
      <FriendCard friend={friends[1]}/>
      <FriendCard friend={friends[2]}/>
    </Wrapper>
  );
}

export default App;
