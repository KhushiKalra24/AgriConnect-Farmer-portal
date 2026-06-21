import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 min-h-screen">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-4">
          This is the About page of AgriConnect.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default About;