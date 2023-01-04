
import Startup from './components/dependent-components/Startup';
import Events from './components/dependent-components/Events';
import StartupToken from './components/independent-components/StartupToken';
import Header from './components/dependent-components/Header';
import logo from './assets/quiz.jpg';
import bulbImage from './assets/bulbImage.jpg';
import Info from './components/independent-components/Info'

import EventsToken from './components/independent-components/EventsToken';
import AboutUs from './components/dependent-components/AboutUs';


function App() {

  return (
    <div>
      {/* <Header background={bulbImage} />
      <AboutUs /> */}
      <Info/>
    </div>
  );
}

export default App;
