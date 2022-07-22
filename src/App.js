import { Fragment } from "react";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import AppRoutes from "./Pages/AppRoutes";

function App() {
  return (
    <Fragment>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Fragment>
  );
}

export default App;
