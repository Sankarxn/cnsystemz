import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Cpu, Settings, ShieldCheck, Zap } from 'lucide-react';

const services = [
  {
    icon: <Cpu size={32} />,
    title: "Custom PC Builds",
    desc: "Precision engineering tailored to your workflow, whether for gaming, design, or deep learning."
  },
  {
    icon: <Settings size={32} />,
    title: "Professional Repairs",
    desc: "Swift and reliable hardware and software diagnostics and repairs for all computer systems."
  },
  {
    icon: <Zap size={32} />,
    title: "Performance Tuning",
    desc: "Breathe new life into your machines with expert upgrades and software optimization."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Networking & Security",
    desc: "Robust enterprise-grade network setup and cybersecurity solutions for home and office."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 text-gradient">Our Services</h2>
          <p className="text-secondary mx-auto max-w-600">
            Comprehensive technology solutions designed to empower your digital experience.
          </p>
        </div>
        <Row className="g-4">
          {services.map((service, i) => (
            <Col key={i} md={6} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card h-100"
              >
                <div className="mb-4 text-accent">
                  {service.icon}
                </div>
                <h4 className="h5 text-white mb-3">{service.title}</h4>
                <p className="small text-secondary mb-0">{service.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
