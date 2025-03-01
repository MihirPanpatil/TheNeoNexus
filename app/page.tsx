import Hero from '@/components/hero';
import Services from '@/components/services';
import Portfolio from '@/components/portfolio';
import Testimonials from '@/components/testimonials';
import Process from '@/components/process';
import CTA from '@/components/cta';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
    </div>
  );
}