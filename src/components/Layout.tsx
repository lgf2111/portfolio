import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ScrollToTopButton from "./ScrollToTopButton";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    // Set the page title based on the current route
    switch (location.pathname) {
      case "/portfolio/":
        setPageTitle("Home");
        break;
      case "/portfolio/about":
        setPageTitle("About");
        break;
      case "/portfolio/projects":
        setPageTitle("Projects");
        break;
      case "/portfolio/contact":
        setPageTitle("Contact");
        break;
    }
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle} - Guan Feng's Portfolio</title>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <ScrollToTopButton />
        <Header />
        <div className="flex-grow">{children}</div>
      </div>
      <Footer />
    </HelmetProvider>
  );
};

export default Layout;
