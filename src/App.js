import './globals.scss';

import Header from './components/Header';
import Introduction from './components/Introduction';
import Welcome from './components/Welcome';
import Menu from './components/Menu';
import Features from './components/Features';
import Reviews from './components/Reviews';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />

      <Introduction />

      <Welcome />

      <Menu />

      <Features />

      <Reviews />

      <About />

    </div>
  );
}

export default App;
