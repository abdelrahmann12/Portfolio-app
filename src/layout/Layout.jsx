import { Outlet } from "react-router-dom";
import Navbar from "../componets/navbar/Navbar.jsx";
import Contact from "../componets/contact/Contact.jsx";
import Footer from "../componets/footer/Footer.jsx";
import Header from "../componets/header/Header.jsx";

export default function Layout() {
  return (
    <>
      <main>
        <div className="layer"></div>
        <Navbar />

        <Outlet />
        
        <Contact />
        <Footer />
      </main>
    </>
  );
}
