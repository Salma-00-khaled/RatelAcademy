import React from 'react';
import HomeScreen from './HomeScreen';
import About from './About';
import Services from './Services';
import WhyUs from './WhyUs';
import Packages from './Packages';
import Contact from './Contact';
import Reviews from './Reviews';

const LandingPage = () => {
  return (
    <main>
      <section id="home"><HomeScreen /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="why-us"><WhyUs /></section>
      <section id="packages"><Packages /></section>
       <section id="contact"><Contact /></section>
       <section id="reviews"><Reviews /></section>
    </main>
  );
};

export default LandingPage;
