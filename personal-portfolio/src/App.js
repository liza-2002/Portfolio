import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import MySkill from './Components/MySkill/MySkill';
import Experience from './Components/Experience/Experience';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <MySkill/>
    </div>
  );
}

export default App;
