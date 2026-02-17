export default function ParentComponent() {
  return (
    <>
      <UserComponent 
      name = "John"
      age = {21}
      address = "Kigali"
      />
      <ProfileComponent />
      <FeedComponent />
    </>
  );
}

function UserComponent(props) {
  return <h1> User Component is {props.name}, lives in {props.address} and he is {props.age}</h1>;
}

function ProfileComponent() {
  return <h1> Profile Component </h1>;
}

function FeedComponent() {
  return <h1> Feed Component</h1>;
}
