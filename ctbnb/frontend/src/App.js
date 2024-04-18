import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Rentals from "./components/Rentals";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        {/* Filters */}
        <Filters />
        {/* Rentals */}
        <Rentals />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
