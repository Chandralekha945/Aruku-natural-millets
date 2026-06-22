import { useState } from "react";
import COLORS from "./theme";

import Navbar from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [section, setSection] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Always clear selected product when navigating
  const handleSetSection = (sec) => {
    setSelectedProduct(null);
    setSection(sec);
  };

  const renderSection = () => {
    if (selectedProduct) {
      return (
        <ProductDetails
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          setSelectedProduct={setSelectedProduct}
        />
      );
    }

    switch (section) {
      case "products":
        return (
          <Products
            searchTerm={searchTerm}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            setSelectedProduct={setSelectedProduct}
          />
        );

      case "about":
        return <About />;

      case "contact":
        return <Contact />;

      default:
        return (
          <>
            <Hero setSection={handleSetSection} />
            <WhyUs />
            <FeaturedProducts
              setSection={handleSetSection}
              searchTerm={searchTerm}
              setSelectedProduct={setSelectedProduct}
            />
            <About />
            <Contact />
          </>
        );
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Arial, sans-serif",
        background: COLORS.primaryPale,
        minHeight: "100vh",
      }}
    >
      <Navbar
        activeSection={section}
        setSection={handleSetSection}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Category bar always visible below navbar */}
      <CategoryBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setSection={handleSetSection}
      />

      <main>{renderSection()}</main>

      <Footer setSection={handleSetSection} />

      <WhatsAppButton />
    </div>
  );
}