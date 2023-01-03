
import Startup from './components/dependent-components/Startup';
import Events from './components/dependent-components/Events';
import StartupToken from './components/independent-components/StartupToken';
import Header from './components/dependent-components/Header';
import logo from './assets/quiz.jpg';
import bulbImage from './assets/bulbImage.jpg';

import EventsToken from './components/independent-components/EventsToken';


function App() {
  return (
    <>
      <Header background={bulbImage} />
    </>
  );
}

export default App;
