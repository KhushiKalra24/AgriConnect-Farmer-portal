import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 min-h-screen">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-4">
          Welcome to your dashboard.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;