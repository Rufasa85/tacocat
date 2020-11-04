import React from "react";

function List(props) {
  // const groceriesLis = props.groceries.map(grocObj=> <li>{grocObj.name}</li>)
  // const groceriesLis = [];
  // for (let i = 0; i < props.groceries.length; i++) {
  //   groceriesLis.push(<li>{props.groceries[i].name}</li>)
  // }
  return (
    <ul className="list-group">
      {props.groceries.map(grocObj=> <li key={grocObj.id}>{grocObj.name}</li>)}
    </ul>
  );
}

export default List;
