"use client";

import React from "react";
import { TogglersProvider } from "@/context/togglers";
import { InputValueProvider } from "@/context/inputValue";

import { Header, BannerHero, GetTouch } from "@/components";
import Booking from "@/components/Booking";
import BookingModal from "@/components/BookingModal";
import BookingToast from "@/components/BookingToast";
import MobileNavbar from "@/components/MobileNavbar";
import Models from "@/components/Models";
import ToTop from "@/components/ToTop";

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
          <BookingToast />
          <ToTop />
          <Models />
          <GetTouch />
        </main>
      </InputValueProvider>
    </TogglersProvider>
  );
}

export default page;
