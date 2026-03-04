import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BrandStory from '../components/BrandStory';
import Features from '../components/Features';
import SignatureProducts from '../components/SignatureProducts';
import InstagramGrid from '../components/InstagramGrid';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream font-sans text-brown-dark selection:bg-caramel selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <Features />
        <SignatureProducts />
        <InstagramGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
