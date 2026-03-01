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
      <ButtonShower/>
      <PlayCSS/>
      <Form/>
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
  // Partial rendering, login if no user and logout if there is user
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
      <button onClick={()=> setCount(prev => prev + 2)}>Count</button>
    </>
  )
}

function ButtonShower(){
  const [visibility, setVisibility] = useState(true);

  const toggleVisibility = () => setVisibility(prev => !prev)

  return(
    <>
      <h1>Change visibility by Button Click</h1>
      {visibility && (
        <h4>This text will be shown/hidden on button click.</h4>
      )}
      <button onClick={toggleVisibility}>{visibility? "Hide":"Show"} message</button>
    </>
  );
}

function PlayCSS() {
  const pStyle = {
  fontSize: '16px',
  color: 'blue'
}

  return (
    <>
    <p style={pStyle}>Hello World!</p>
    <p style={pStyle}>The weather is sunny today.</p>
    
    <p style={{ ...pStyle, color: 'green', textAlign: 'right' }}>
      When you go to work, bring your umbrella with you!
    </p>
    </>
  )
}

