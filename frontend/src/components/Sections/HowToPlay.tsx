import StepCard from "./StepCard";

export default function HowToPlay() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">How to Play</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StepCard
            number={1}
            title="Pay to Enter"
            description="Use cryptocurrency equivalent to $2 USD to start your adventure."
          />
          <StepCard
            number={2}
            title="Navigate the Maze"
            description="Move carefully, conserve water, and reveal the map as you go."
          />
          <StepCard
            number={3}
            title="Find the Levers"
            description="Locate and activate all levers to unlock the maze exit."
          />
          <StepCard
            number={4}
            title="Escape & Earn"
            description="Successfully escape to earn $10 USD equivalent in cryptocurrency!"
          />
        </div>
      </div>
    </section>
  );
}
