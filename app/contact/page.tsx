"use client";

import React from "react";
import { TogglersProvider } from "../context/togglers";
import  { Header,
  BannerHero,

  Contact,
  GetTouch,
} from '../components'
import MobileNavbar from "../components/MobileNavbar";
import ToTop from '../components/ToTop'

function page() {
  return (
    <TogglersProvider>
      <main>
        <Header />
        <MobileNavbar />
        <BannerHero htmlId="contact-hero" page="Contact" />
        <ToTop />
        <Contact />
        <GetTouch />
      </main>
    </TogglersProvider>
  );
}

export default page;
