import { Droplet, Compass, Map, Key, DollarSign, Award } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function GameFeatures() {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Game Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Droplet className="w-12 h-12 mb-4" />}
            title="Water Management"
            description="Every step costs water. Manage your resources carefully!"
          />
          <FeatureCard
            icon={<Compass className="w-12 h-12 mb-4" />}
            title="Fog of War"
            description="Navigate through the unknown. Reveal the map as you explore."
          />
          <FeatureCard
            icon={<Map className="w-12 h-12 mb-4" />}
            title="Dynamic Maps"
            description="Each game generates a unique map layout for a fresh challenge."
          />
          <FeatureCard
            icon={<Key className="w-12 h-12 mb-4" />}
            title="Hidden Levers"
            description="Find all levers to unlock the maze and escape!"
          />
          <FeatureCard
            icon={<DollarSign className="w-12 h-12 mb-4" />}
            title="Crypto Rewards"
            description="Earn cryptocurrency for conquering the maze!"
          />
          <FeatureCard
            icon={<Award className="w-12 h-12 mb-4" />}
            title="Multiple Lives"
            description="Collect extra lives to extend your adventure."
          />
        </div>
      </div>
    </section>
  );
}
