import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Globe, Camera, Share2, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="section-padding border-glass-top">
      <Container>
        <Row className="g-5">
          <Col lg={4}>
            <h3 className="navbar-brand mb-4">Cn <span style={{ color: 'var(--accent-color)' }}>Systemz</span></h3>
            <p className="small text-secondary mb-4 max-w-300">
              Premium computer sales and service center with a decade of expertise in custom computing and technical excellence.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-secondary"><Globe size={20} /></a>
              <a href="#" className="text-secondary"><Camera size={20} /></a>
              <a href="#" className="text-secondary"><Share2 size={20} /></a>
            </div>
          </Col>
          <Col sm={6} lg={4}>
            <h5 className="text-white mb-4">Contact Info</h5>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-3 text-secondary">
                <MapPin size={18} color="var(--accent-color)" />
                <span className="small">Nileshwar, Kasaragod</span>
              </div>
              <div className="d-flex align-items-center gap-3 text-secondary">
                <Phone size={18} color="var(--accent-color)" />
                <span className="small">9645-70-1234</span>
              </div>
              <div className="d-flex align-items-center gap-3 text-secondary">
                <Mail size={18} color="var(--accent-color)" />
                <span className="small">cnsystemz@gmail.com</span>
              </div>
            </div>
          </Col>
          <Col sm={6} lg={4}>
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#about" className="text-secondary small text-decoration-none">Our Story</a></li>
              <li><a href="#services" className="text-secondary small text-decoration-none">Services</a></li>
              <li><a href="#products" className="text-secondary small text-decoration-none">Shop</a></li>
              <li><a href="#works" className="text-secondary small text-decoration-none">Latest Works</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="my-5 border-glass-color" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="d-flex flex-column align-items-center align-items-md-start">
            <p className="small text-secondary mb-1">© 2026 Cn Systemz. All rights reserved.</p>
            <p className="small text-secondary mb-0">
              Developed by : <a href="https://aentree.com" className="credit-link">Aentree</a>
            </p>
          </div>
          
          <div className="d-flex gap-4">
            <a href="#" className="text-secondary small text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-secondary small text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
