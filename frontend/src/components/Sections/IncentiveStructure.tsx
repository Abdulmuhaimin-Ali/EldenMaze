export default function IncentiveStructure() {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Earn While You Play</h2>
        <div className="flex justify-center items-center space-x-8">
          <div className="bg-gray-700 p-8 rounded-lg">
            <p className="text-2xl font-bold mb-2">Entry Fee</p>
            <p className="text-4xl font-bold text-purple-400">$2 USD</p>
            <p className="text-sm mt-2">in cryptocurrency</p>
          </div>
          <div className="text-5xl font-bold">→</div>
          <div className="bg-gray-700 p-8 rounded-lg">
            <p className="text-2xl font-bold mb-2">Potential Reward</p>
            <p className="text-4xl font-bold text-green-400">$10 USD</p>
            <p className="text-sm mt-2">in cryptocurrency</p>
          </div>
        </div>
      </div>
    </section>
  );
}
