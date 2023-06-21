"use client";

import React from "react";
import { TogglersProvider } from "./context/togglers";
import { InputValueProvider } from "./context/inputValue";
import { CurrentValueProvider } from "./context/currentValue";
import {
  Hero,
  QuickEasy,
  RentalFleet,
  SaveBig,
  ChooseUs,
  Testimonials,
  Faq,
  DownloadApp,
  Header,
  Wedding,
} from "./components";
import BookingModal from "./components/BookingModal";
import BookingToast from "./components/BookingToast";
import ToTop from "./components/ToTop";
import MobileNavbar from "./components/MobileNavbar";

function Home() {
  return (
    <div>
      <TogglersProvider>
        <InputValueProvider>
          <CurrentValueProvider>
            <main>
            <Header />
            <MobileNavbar />


              <Hero />
              <ToTop />
              <BookingModal />
              <BookingToast />
              <QuickEasy />
              <RentalFleet />
              <Wedding />
              <ChooseUs />
              <Testimonials />
              <Faq />
              <SaveBig />
              {/* <DownloadApp /> */}
            </main>
          </CurrentValueProvider>
        </InputValueProvider>
      </TogglersProvider>
    </div>
  );
}

export default Home;
