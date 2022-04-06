/** @format */

// Create a component - holds all logic (css/html/js) in one file
// You must start by importing React

import React, {useState} from "react";
import Hello from './sayHello_component';
import Tweet from './Tweet_component';

// Normally you cannot use html within a function
// React gives the ability to contain everything within a component which is cleaner. No more grabbing elements

// When you call a function e.g sayHello with () at the end this invokes it on page load, leave the () off to invoke only when event is triggered.

// You can create individual components in separate js files that can be reused across projects.

function App() {

var [isRed, setRed] = useState(false); // the useState(false); means false is the starting value
var [count, setCount] = useState(0); // useState(0); means 0 is the starting value

var [users, setUsers] = useState([
  { name: 'Tired ser ggrimble',
    content: 'This seems to be relatively easy to pick up',
    likes: 5},
  { name: 'Bung',
    content: 'You could be sleeping',
    likes: 51},
  { name: 'Tired ser bung',
    content: 'Sleep is for the needy',
    likes: 523},
    { name: 'Stiletto',
    content: 'I am needy',
    likes: 423},
    { name: 'Gumphfo',
    content: 'Sleep is for the needy',
    likes: 1523}]);

var increment = () => {setCount(count + 1); // every click adds 1 to the value of count 
                       setRed(!isRed);} // every click changes the value of isRed to the oposite of what ever it is (e.g. toggle between true and false).

                       // This is really useful for adding and removing classes.

  return (
    <div>
      <h2>Here lies the hello component</h2>
      <Hello />
      <h2>Here lies the Tweet component</h2>
      <div className="App">
      {users.map(user => (
        <Tweet name = {user.name} content = {user.content} likes = {user.likes}/>
      ))}
    </div>
    <h2>Showing the use of states in the react app to change content</h2>
    <p>Below we have a button that has an onclick function attached to it called incrememnt.</p>
    <button onClick = {increment}>Increment</button>
    <h2>{count}</h2>
    <h2 className={isRed ? 'fancy_class' : ''}>Banana hammock</h2>
    <p>This should change style based on the status of useState.</p>
    </div>
  );
}

// on this page we are creating a component which is inserted (rendered) in the dom of the index.html file
export default App;

