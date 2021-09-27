import './globals.scss';

import Header from './components/Header';
import Introduction from './components/Introduction';
import Welcome from './components/Welcome';
import Menu from './components/Menu';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />

      <Introduction />

      <Welcome />

      <Menu />

      <About />

    </div>
  );
}

export default App;
