import "./App.css";
import BoxContent from "./BoxContent";
import UserCard from "./UserCard";

function App() {
  const users = [
    { id: 1, name: "Rahim", age: 25 },
    { id: 2, name: "Karim", age: 30 },
    { id: 3, name: "Sakib", age: 22 },
  ];

  const isAdmin = true;
  const isLoggedIn = false;

  return (
    <>
      {isAdmin && <h1>Welcome Admin</h1>}
      {isLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Login</h1>}

      <BoxContent>
        <h2>My Box</h2>
        <p>This is my content</p>
      </BoxContent>

      {users.map((user) => (
        <UserCard key={user.id} id={user.id} name={user.name} age={user.age} />
      ))}
    </>
  );
}

export default App;
