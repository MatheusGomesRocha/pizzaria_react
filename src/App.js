import './globals.scss';

import Header from './components/Header';
import Introduction from './components/Introduction';
import About from './components/About';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Header />

      <Introduction />

      <About />

      <Team />
    </div>
  );
}

export default App;
