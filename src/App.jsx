import './App.css'
import Navbar from './components/Navbar'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer'
import { useEffect } from 'react';
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, 
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
     <Navbar/>
     <AppRouter/>
     <Footer/>
    </div>
  )
}

export default App
