import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Footer from './components/Footer';
import Logo from './assets/spacex logo.png';
import Menu from './assets/menu_new.png';
import AX3 from './assets/ax-3.jpg';
import Starlink from './assets/starlink_mission.jpg';
import Starlink2 from './assets/starlink_mission_2.jpg';
import Starship from './assets/starship.jpg';

function App() {
  return (
    <div className="App">
      <Header Logo={Logo} Menu={Menu}/>

      <div className='item-container'>
        <Item heading='AX-3 MISSION' mission='CURRENT MISSION' image={AX3}/>
        <Item heading='STARLINK MISSION' mission='RECENT MISSION' image={Starlink}/>
        <Item heading='STARLINK MISSION' mission='RECENT MISSION' image={Starlink2}/>
        <Item heading="STARSHIP'S SECOND FLIGHT TEST" mission='RECENT MISSION' image={Starship}/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
