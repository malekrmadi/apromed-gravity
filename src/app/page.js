import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Methodology from '@/components/Methodology';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import LocationMap from '@/components/LocationMap';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Methodology />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <LocationMap />
    </>
  );
}
