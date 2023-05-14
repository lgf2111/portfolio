import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    // Set the page title based on the current route
    switch (location.pathname) {
      case "/":
        setPageTitle("Home");
        break;
      case "/about":
        setPageTitle("About");
        break;
      case "/projects":
        setPageTitle("Projects");
        break;
      case "/contact":
        setPageTitle("Contact");
        break;
    }
  }, [location.pathname]);

  return (
    <div>
      <Helmet>
        <title>{pageTitle} - Guan Feng's Portfolio</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
