import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import AppRoutes from "./Pages/AppRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
