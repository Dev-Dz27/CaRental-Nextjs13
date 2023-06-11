"use client";

import React from "react";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";
import BannerHero from "../components/BannerHero";
import ToTop from "../components/ToTop";
import { TogglersProvider } from "../context/togglers";
import Models from "../components/Models";
import GetTouch from "../components/GetTouch";
import Footer from "../components/Footer";
import { InputValueProvider } from "../context/inputValue";
import { CurrentValueProvider } from "../context/currentValue";
import BookingModal from "../components/BookingModal";
import Booking from "../components/Booking";

function page() {
  return (
    <TogglersProvider>
            <InputValueProvider>

      <main>
        <Header />
        <MobileNavbar />
        <BannerHero htmlId="models-hero" page="Vehicle Models" />
        <Booking />
        <BookingModal />
        <ToTop />
        <Models />
        <GetTouch />
        <Footer />
      </main>
            </InputValueProvider>
    </TogglersProvider>
  );
}

export default page;
