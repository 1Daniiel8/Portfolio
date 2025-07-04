'use client';

import { Container } from '@chakra-ui/react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Works';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import './styles/global.css';

export default function Home() {
  return (
    <>
      <Container maxW="6xl" py={16}>
        <Hero />
        <About />
        {/* <Projects /> */}
        <Contact />
        <ThemeToggle />
      </Container>
      <Footer />
    </>
  );
}
