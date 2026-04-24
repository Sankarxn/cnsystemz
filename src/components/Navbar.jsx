import React, { useState, useEffect } from 'react';
import { Container, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BootstrapNavbar 
      fixed="top" 
      expand="lg" 
      className={`glass-nav ${scrolled ? 'py-2 shadow-lg' : 'py-4'}`}
      variant="dark"
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" className="navbar-brand">
          Cn <span className="text-accent">Systemz</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="https://wa.me/yourwhatsappnumber" className="btn-primary-custom ms-lg-4 py-2 px-4">
              Book Now
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
