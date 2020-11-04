import React, { Component } from 'react'
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';


export default class App extends Component {
  state = {
    friends: friends
  }

  removeFriend = id=>{
    console.log("id passed",id)
    const newFriends = this.state.friends.filter(function(friendObj){
      if(friendObj.id===id){
        return false
      }else {
        return true
      }
    })
    this.setState({
      friends:newFriends
    })
  }

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => <FriendCard key={friend.id} id={friend.id} name={friend.name} image={friend.image} occupation={friend.occupation} location={friend.location} deleteBtnClick = {this.removeFriend} />)}
      </Wrapper>
    )
  }
}


// function App() {
//   return (
//     <Wrapper>
//       <Title>Friends List</Title>
//       <FriendCard
//         name={friends{0}.name}
//         image={friends[0].image}
//         occupation={friends[0].occupation}
//         location={friends[0].location}
//       />
//       <FriendCard
//         name={friends[1].name}
//         image={friends[1].image}
//         occupation={friends[1].occupation}
//         location={friends[1].location}
//       />
//       <FriendCard
//         name={friends[2].name}
//         image={friends[2].image}
//         occupation={friends[2].occupation}
//         location={friends[2].location}
//       />
//     </Wrapper>
//   );
//}

// export default App;
