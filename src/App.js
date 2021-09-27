import './globals.scss';

import Header from './components/Header';
import Introduction from './components/Introduction';
import Welcome from './components/Welcome';
import About from './components/About';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Header />

      <Introduction />

      <Welcome />

      <About />

      <Team />
    </div>
  );
}

export default App;
