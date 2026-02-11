function App(){
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

export default App