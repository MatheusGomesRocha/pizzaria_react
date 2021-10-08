import React, { useContext } from 'react';

import './globals.scss';

import Header from './components/Header';
import Cart from './components/Cart';
import Introduction from './components/Introduction';
import Welcome from './components/Welcome';
import Menu from './components/Menu';
import Features from './components/Features';
import Reviews from './components/Reviews';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { ModalContext } from './contexts/ModalContext';
import Modal from './components/Modal';
import OrderModal from './components/OrderModal';

function App() {
  const { email, isOpen, isOpenOrderModal } = useContext(ModalContext);

  return (
        <div className="app">
          <main>
            <Header />

            <Introduction />

            <Welcome />

            <Menu />

            <Features />

            <Reviews />

            <About />

            <Events />

            <Contact />

            <Footer />

            {isOpen ? <Modal /> : undefined}

            {isOpenOrderModal ? <OrderModal /> : undefined}
          </main>

        {/* {email ? <Cart /> : undefined} */}
        
      
      </div>
  );
}

export default App;
