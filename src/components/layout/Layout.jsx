import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div id="home" className="min-h-screen flex flex-col bg-secondary dark:bg-secondary-dark">
      <Navbar />
      <div className="flex-1 mx-auto w-full">
        <main>
          {/* Outlet: is a dynamic placeholedr that will render the child routes */}
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
