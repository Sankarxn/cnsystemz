import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Gamingpc from '../assets/works/Gamingpc.jpg';
import Datastore from '../assets/works/datarestore.jpg';
import CCtv from '../assets/works/HDsecuritycamera.jpg';
import Wifi from '../assets/works/wifi.jpg';  
import { data } from 'framer-motion/client';



const works = [
  { id: 1, title: "Gaming Setup", category: "Custom Build", img: Gamingpc },
  { id: 2, title: "Data Restore", category: "Professional Fix", img: Datastore },
  { id: 3, title: "Security Camera", category: "Security Solutions", img: CCtv },
  { id: 4, title: "Nexus WiFi Network", category: "Network Setup", img: Wifi }, 
];

export default function LatestWorks() {
  return (
    <section id="works" className="section-padding bg-very-dark">
      <Container>
        <div className="d-flex justify-content-between align-items-end mb-5">
          <div>
            <h2 className="display-5 text-gradient">Latest Works</h2>
            <p className="text-secondary mb-0">Showcasing our precision and craftsmanship.</p>
          </div>
          <a href="#" className="nav-link p-0 font-size-sm">View All Projects →</a>
        </div>
        <Row className="g-4">
          {works.map((work, i) => (
            <Col key={work.id} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="pos-relative overflow-hidden rounded-4 h-350"
              >
                <img 
                  src={work.img} 
                  alt={work.title} 
                  className="w-100 h-100 object-fit-cover img-smooth-transition img-scale-hover"
                />
                <div 
                  className="position-absolute bottom-0 start-0 w-100 p-4 overlay-gradient"
                >
                  <span className="badge rounded-pill mb-2 glass-badge">{work.category}</span>
                  <h4 className="text-white mb-0">{work.title}</h4>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
