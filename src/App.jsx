import { useState } from 'react';

export default function ParentComponent() {
  function greetings(){
    return "Hello World!"
  }
  const [name, setName] = useState("John");
  return (
    <>
      <MainUsersComponent/>
      <UserComponent
      name = "John"
      age = {21}
      address = "Kigali"
      greeting = {greetings}
      />
      <ProfileComponent />
      <FeedComponent />
      <StateExample 
      name={name}  
      setName={setName}
      />
      <Counter/>
    </>
  );
}

function MainUsersComponent(){
  const users = [
    { id: 1, name: 'Nathan', role: 'Web Developer' },
    { id: 2, name: 'John', role: 'Web Designer' },
    { id: 3, name: 'Jane', role: 'Team Leader' },
  ]
  return (
    <>
      <h1>This is my List: </h1>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>{user.name} serving as {user.role}</li>
          )
        }
        )}
      </ul>
    </>
  )
}

function UserComponent(props) {
  const { user } = props
  let button = <button>Login</button>

  if(!user){
        button = <button>Logout</button>
  }
  return (
    <>
      <h1> User Component </h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Address: {props.address}</p>
      <p>{props.greeting()}</p>

      {/*Conditional rendering with &&*/}
      {props.name === "Ngenzi" && 
      <p>The following button tests partial rendering</p>
      }
      {button}
    </>
  );
}

function ProfileComponent() {
  return <h1> Profile Component </h1>;
}

function FeedComponent() {
  return <h1> Feed Component</h1>;
}

function StateExample({name, setName}) {
return (
	<>
		<h1>Hello {name}</h1>
		<button onClick={() => { name === "Mark"? setName("John"): setName("Mark")}}>
	        Change name
	  </button>
	</>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <>
      <h3>I'm counting {count}</h3>
      <button onClick={()=> setCount(count+1)}>Count</button>
    </>
  )
}


