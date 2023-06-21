"use client";

import React from "react";
import { TogglersProvider } from "../context/togglers";
import  { Header,
  BannerHero,

  Team,
  GetTouch,
} from '../components'
import MobileNavbar from "../components/MobileNavbar";
import ToTop from '../components/ToTop'

function page() {
  return (
    <TogglersProvider>
      <main>
        <MobileNavbar />
        <Header />

        <BannerHero htmlId="team-hero" page="Our Team" />
        <ToTop />
        <Team />
        <GetTouch />
      </main>
    </TogglersProvider>
  );
}

export default page;
