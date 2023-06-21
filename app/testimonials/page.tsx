"use client";

import React from "react";
import { TogglersProvider } from "../context/togglers";
import { BannerHero, Testimonials, GetTouch, Header } from "../components";
import MobileNavbar from "../components/MobileNavbar";
import ToTop from "../components/ToTop";

function page() {
  return (
    <TogglersProvider>
      <main>
        <Header />
        <MobileNavbar />

        <BannerHero htmlId="testimonials-hero" page="Testimonials" />
        <ToTop />
        <Testimonials />
        <GetTouch />
      </main>
    </TogglersProvider>
  );
}

export default page;
