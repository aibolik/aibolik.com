import { Header } from '~/components/header';
import { HeroSection } from '~/components/sections/hero-section';



export default function Index() {
  return (
    <div>
      <HeroSection header={<Header />} />
    </div>
  );
}
