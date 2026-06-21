import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 min-h-screen">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="mt-4">
          Login page placeholder.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Login;