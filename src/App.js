import "./App.css";
import "./index.css";
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import Tech from "./Tech";
import Work from "./Work";
import Contact from "./Contact";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Header id="header"></Header>
      <div id="about"><About /></div>
      <div id="tech"><Tech /></div>
      <div id="work"><Work /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
