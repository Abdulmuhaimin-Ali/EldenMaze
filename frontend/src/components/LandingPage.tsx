import CallToAction from "./Sections/CallToAction";
import GameFeatures from "./Sections/GameFeatures";
import HeroSection from "./Sections/Hero";
import HowToPlay from "./Sections/HowToPlay";
import IncentiveStructure from "./Sections/IncentiveStructure";

export default function EldinMazeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <HeroSection />
      <GameFeatures />
      <HowToPlay />
      <IncentiveStructure />
      <CallToAction />
    </div>
  );
}
