
import Startup from './components/dependent-components/Startup';
import Events from './components/dependent-components/Events';
import StartupToken from './components/independent-components/StartupToken';

import logo from './assets/quiz.jpg';
import EventsToken from './components/independent-components/EventsToken';


function App() {
  return (
    <>
      <EventsToken image={logo} name="Event" />
    </>
  );
}

export default App;
