import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import UserCard from "./UserCard";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserCard name="Rukunujjaman Sarker" age={32} />
      <Footer />
    </>
  );
}

export default App;
