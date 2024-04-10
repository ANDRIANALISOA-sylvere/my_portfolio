import './App.css';
import './index.css'
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import Tech from './Tech';
import Work from './Work';
import Contact from './Contact';
function App() {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <About></About>
            <Tech></Tech>
            <Work></Work>
            <Contact></Contact>
        </div>
    )
}

export default App;
