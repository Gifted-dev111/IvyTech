import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Sections/Hero";
import WhoWeAre from "../components/Sections/Whoweare";
import Solutions from "../components/Sections/Solutions";
import Sectors from "../components/Sections/Sectors";
import Licences from "../components/Sections/Licences";
import Footer from "../components/layout/Footer";
import TopBar from "../components/layout/TopBar";

import ContactModal from "../components/Sections/ContactModal";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactForm = () => {
    console.log(
      "=== CLICK TRIGGERED: openContactForm was called in Home.jsx ===",
    );
    setIsModalOpen(true);
  };

  const closeContactForm = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <TopBar />

        <Navbar onContactClick={openContactForm} />

        <main>
          <Hero onContactClick={openContactForm} />

          <WhoWeAre onContactClick={openContactForm} />

          <Solutions />

          <Sectors />

          <Licences />
        </main>

        <Footer onContactClick={openContactForm} />
      </div>
      <ContactModal isOpen={isModalOpen} onClose={closeContactForm} />
    </>
  );
}

export default Home;
