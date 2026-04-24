import React from 'react';
import { motion } from 'framer-motion';
import shop from '../assets/shop.jpeg';

export default function Hero() {
  return (
    <section id="home" className="hero-content pos-relative overflow-hidden text-center text-lg-start pt-5">
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="display-1 text-gradient mb-4">
                Architecture of <br /> Excellence.
              </h1>
              <p className="lead mb-5 text-secondary max-w-600">
                At Cn Systemz, we engineer the heartbeat of your digital life. 
                Years of expertise in precision builds and professional services.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <a href="#services" className="btn-primary-custom">Our Services</a>
                <a href="#products" className="btn-outline-light btn-lg rounded-pill px-4 btn-height-standard border-glass-full flex-center-inline text-white text-decoration-none">Our Products</a>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <motion.div
              className="glass-card"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.4 },
                x: { duration: 0.8, delay: 0.4 },
                default: { type: "spring", stiffness: 200, damping: 20 }
              }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 4, 
                rotateX: -3,
                boxShadow: "0 24px 60px rgba(0,0,0,0.5)"
              }}
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              <div className="shimmer-overlay"></div>
              <img 
                src={shop} 
                alt="Hero Display" 
                className="glass-card-img"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
