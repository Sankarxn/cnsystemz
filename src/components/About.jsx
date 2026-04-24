import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="display-4 text-gradient mb-4">Dedicated to <br /> Perfection.</h2>
              <p className="lead text-secondary">
                With over a decade of hands-on experience, Cn Systemz has become a trusted name in high-performance computing.
              </p>
            </motion.div>
          </Col>
          <Col lg={6} className="offset-lg-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card"
            >
              <div className="row g-4">
                <div className="col-6">
                  <h3 className="text-white mb-2">10+</h3>
                  <p className="small">Years of Expertise</p>
                </div>
                <div className="col-6">
                  <h3 className="text-white mb-2">5000+</h3>
                  <p className="small">Systems Built</p>
                </div>
                <div className="col-6">
                  <h3 className="text-white mb-2">99%</h3>
                  <p className="small">Client Trust</p>
                </div>
                <div className="col-6">
                  <h3 className="text-white mb-2">24/7</h3>
                  <p className="small">Expert Support</p>
                </div>
              </div>
              <hr className="my-4 border-glass-color" />
              <p className="text-secondary">
                We believe that every component matters. Our mission is to provide the highest quality sales and service experience, ensuring your systems run flawlessly for years to come.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
