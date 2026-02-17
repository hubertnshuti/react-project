export default function ParentComponent() {
  function greetings(){
    return "Hello World!"
  }
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
  return <h1> User Component is {props.name}, lives in {props.address} and he is {props.age}. <br />VALUE OF FUNCTION PROP IS {props.greeting()}</h1>;
}

function ProfileComponent() {
  return <h1> Profile Component </h1>;
}

function FeedComponent() {
  return <h1> Feed Component</h1>;
}


