import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Videos from './components/Videos';
import Mixes from './components/Mixes';
import LiveDates from './components/LiveDates';
import Bookings from './components/Bookings';
import Connect from './components/Connect';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Music />
        <Videos />
        <Mixes />
        <LiveDates />
        <Bookings />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
