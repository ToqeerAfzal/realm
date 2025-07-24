// pages/index.js
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Headline from './components/Headline';
import FullPageNavbar from './components/FullPageNavbar';
import ClientsSection from './components/ClientsSection';

export default function Home() {
  return (
    <>
      <FullPageNavbar />
        <main>
        <Hero />
        <Headline />
        <ClientsSection />
      </main>
      <FullPageNavbar />
        <main>
        <Hero />
        <Headline />
        <ClientsSection />
      </main>
    </>
  );
}
