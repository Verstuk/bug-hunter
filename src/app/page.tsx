import { Hero } from './components/Hero';
import { About } from './components/About';
import { Trophies } from './components/Trophies';
import { Instruments } from './components/Instruments';
import { Next } from './components/Next';
import { ContactForm } from './components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Trophies />
      <Instruments />
      <Next />
      <ContactForm />
    </main>
  );
}