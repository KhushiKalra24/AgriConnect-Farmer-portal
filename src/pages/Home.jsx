import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="Crop Advisory"
            description="Get expert recommendations for healthier crops and better yield."
          />

          <Card
            title="Market Prices"
            description="Check the latest market prices before selling your produce."
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;