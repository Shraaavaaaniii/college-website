import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutUsPage } from "./components/AboutUsPage";
import { AdmissionsPage } from "./components/AdmissionsPage";
import { DepartmentsPage } from "./components/DepartmentsPage";
import { PlacementsPage } from "./components/PlacementsPage";
import { ContactUsPage } from "./components/ContactUsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutUsPage />;
      case "admissions":
        return <AdmissionsPage />;
      case "departments":
        return <DepartmentsPage />;
      case "placements":
        return <PlacementsPage />;
      case "contact":
        return <ContactUsPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
