"use client";

import React from "react";
import { TogglersProvider } from "../context/togglers";
import { InputValueProvider } from "../context/inputValue";
import { CurrentValueProvider } from "../context/currentValue";
import  { Header,

  BannerHero,
  About,
  QuickEasy,
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
        <BannerHero htmlId="about-hero" page="About" />
        <ToTop />
        <About />
        <QuickEasy />
        <GetTouch />
      </main>
    </TogglersProvider>
  );
}

export default page;
